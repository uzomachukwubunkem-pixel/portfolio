// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Change icon based on menu state
    const icon = mobileMenuBtn.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Resume Modal
const resumeBtn = document.getElementById('resumeBtn');
const resumeModal = document.getElementById('resumeModal');
const closeModal = document.querySelector('.close-modal');

resumeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    resumeModal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
    resumeModal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === resumeModal) {
        resumeModal.style.display = 'none';
    }
});

// GitHub Projects Integration
const loadGithubBtn = document.getElementById('loadGithubBtn');
const githubProjectsContainer = document.getElementById('githubProjects');
const repoCountElement = document.getElementById('repoCount');
const languageStatsElement = document.getElementById('languageStats');

// Your GitHub username (update this with your actual GitHub username)
const GITHUB_USERNAME = 'uzomachukwubunkem-pixel';

// Language colors for GitHub
const languageColors = {
    'JavaScript': '#f1e05a',
    'HTML': '#e34c26',
    'CSS': '#563d7c',
    'Python': '#3572A5',
    'Java': '#b07219',
    'TypeScript': '#2b7489',
    'C++': '#f34b7d',
    'C#': '#178600',
    'PHP': '#4F5D95',
    'Ruby': '#701516',
    'Go': '#00ADD8',
    'Swift': '#ffac45',
    'Kotlin': '#F18E33',
    'Rust': '#dea584',
    'Shell': '#89e051',
    'Vue': '#2c3e50',
    'React': '#61dafb',
    'Node.js': '#339933',
    'Dart': '#00B4AB',
    'Scala': '#c22d40'
};

// Function to fetch GitHub repositories
async function fetchGitHubRepos() {
    try {
        loadGithubBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
        loadGithubBtn.disabled = true;
        
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`);
        
        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }
        
        const repos = await response.json();
        
        // Update repo count
        repoCountElement.textContent = `${repos.length} Repositories`;
        
        // Calculate language statistics
        const languages = {};
        repos.forEach(repo => {
            if (repo.language) {
                languages[repo.language] = (languages[repo.language] || 0) + 1;
            }
        });
        
        // Get top 3 languages
        const topLanguages = Object.entries(languages)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 3)
            .map(([lang, count]) => lang)
            .join(', ');
        
        languageStatsElement.textContent = topLanguages ? `Top: ${topLanguages}` : 'No language data';
        
        // Clear placeholder
        githubProjectsContainer.innerHTML = '';
        
        // Filter out forked repositories and sort by stars
        const filteredRepos = repos
            .filter(repo => !repo.fork)
            .sort((a, b) => b.stargazers_count - a.stargazers_count);
        
        // Display repositories
        if (filteredRepos.length === 0) {
            githubProjectsContainer.innerHTML = `
                <div class="github-placeholder">
                    <i class="fab fa-github github-icon"></i>
                    <p>No public repositories found</p>
                </div>
            `;
        } else {
            filteredRepos.forEach(repo => {
                const projectCard = createGitHubProjectCard(repo);
                githubProjectsContainer.appendChild(projectCard);
            });
        }
        
        loadGithubBtn.innerHTML = '<i class="fas fa-sync-alt"></i> Refresh Projects';
        loadGithubBtn.disabled = false;
        
    } catch (error) {
        console.error('Error fetching GitHub repos:', error);
        githubProjectsContainer.innerHTML = `
            <div class="github-placeholder">
                <i class="fas fa-exclamation-triangle github-icon"></i>
                <p>Error loading GitHub projects. Please try again later.</p>
                <p class="error-details">${error.message}</p>
            </div>
        `;
        
        loadGithubBtn.innerHTML = '<i class="fab fa-github"></i> Retry Loading';
        loadGithubBtn.disabled = false;
    }
}

// Function to create a GitHub project card
function createGitHubProjectCard(repo) {
    const card = document.createElement('div');
    card.className = 'github-project-card';
    
    // Format date
    const updatedDate = new Date(repo.updated_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
    
    // Get language color
    const languageColor = languageColors[repo.language] || '#64ffda';
    
    card.innerHTML = `
        <div class="github-project-header">
            <div>
                <h3 class="github-project-name">
                    <i class="fab fa-github"></i> ${repo.name}
                </h3>
                <p class="github-project-updated">Updated: ${updatedDate}</p>
            </div>
            <span class="tech-tag">${repo.private ? 'Private' : 'Public'}</span>
        </div>
        
        <p class="github-project-description">
            ${repo.description || 'No description provided.'}
        </p>
        
        <div class="github-project-footer">
            <div class="github-project-language">
                <span class="language-dot" style="background-color: ${languageColor}"></span>
                ${repo.language || 'Not specified'}
            </div>
            
            <div class="github-project-stats">
                <div class="github-stat">
                    <i class="fas fa-star"></i>
                    <span>${repo.stargazers_count}</span>
                </div>
                <div class="github-stat">
                    <i class="fas fa-code-branch"></i>
                    <span>${repo.forks_count}</span>
                </div>
            </div>
        </div>
    `;
    
    // Make card clickable to open repository
    card.addEventListener('click', () => {
        window.open(repo.html_url, '_blank');
    });
    
    return card;
}

// Add click event to GitHub button
loadGithubBtn.addEventListener('click', fetchGitHubRepos);

// Function to fetch GitHub user info
async function fetchGitHubUserInfo() {
    try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        
        if (response.ok) {
            const userData = await response.json();
            
            // Update profile picture if available
            const profilePic = document.getElementById('profilePicture');
            if (userData.avatar_url) {
                // You can choose to use GitHub avatar instead of placeholder
                // profilePic.src = userData.avatar_url;
            }
            
            // You could also display follower count or other stats
            console.log('GitHub user data:', userData);
        }
    } catch (error) {
        console.error('Error fetching GitHub user info:', error);
    }
}

// Initialize GitHub user info on page load
fetchGitHubUserInfo();

// Scroll to top button (optional enhancement)
function createScrollToTopButton() {
    const scrollBtn = document.createElement('button');
    scrollBtn.id = 'scrollToTop';
    scrollBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background-color: var(--accent-color);
        color: var(--primary-color);
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        justify-content: center;
        align-items: center;
        font-size: 1.2rem;
        z-index: 100;
        transition: all 0.3s;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    `;
    
    document.body.appendChild(scrollBtn);
    
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.style.display = 'flex';
        } else {
            scrollBtn.style.display = 'none';
        }
    });
}

// Create scroll to top button
createScrollToTopButton();

// Add CSS for scroll button
const scrollBtnStyles = document.createElement('style');
scrollBtnStyles.textContent = `
    #scrollToTop:hover {
        background-color: #52d7b7;
        transform: translateY(-3px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
    }
    
    @media (max-width: 768px) {
        #scrollToTop {
            bottom: 20px;
            right: 20px;
            width: 45px;
            height: 45px;
        }
    }
`;
document.head.appendChild(scrollBtnStyles);

// Photo upload simulation (for demonstration only)
document.getElementById('profilePicture').addEventListener('click', function() {
    console.log('To add your own photo:');
    console.log('1. Save your photo in the same folder as the HTML file');
    console.log('2. Update the src attribute in index.html');
    console.log('3. Recommended: Use a square image for best results');
});

// Add active class to current section in navigation
function highlightCurrentSection() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Initialize section highlighting
highlightCurrentSection();