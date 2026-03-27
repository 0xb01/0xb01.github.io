/**
 * Toggle timeline item expansion
 * @param {Event} event - The click event
 */
function toggleTimeline(event) {
    event.stopPropagation();

    const header = event.currentTarget;
    const timelineItem = header.closest('.timeline-item');

    if (!timelineItem) return;

    const isExpanded = timelineItem.classList.contains('expanded');
    const icon = header.querySelector('.toggle-icon');

    // Toggle .expanded/.collapsed classes
    if (isExpanded) {
        timelineItem.classList.remove('expanded');
        timelineItem.classList.add('collapsed');
        if (icon) {
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-right');
        }
    } else {
        timelineItem.classList.remove('collapsed');
        timelineItem.classList.add('expanded');
        if (icon) {
            icon.classList.remove('fa-chevron-right');
            icon.classList.add('fa-chevron-down');
        }
    }
}

/**
 * Show home view (all sections visible)
 */
function showHome() {
    const homeContent = document.getElementById('homeContent');
    const projectsSection = document.getElementById('projectsSection');
    const blogSection = document.getElementById('blogSection');
    const blogPostContent = document.getElementById('blogPostContent');
    const contactPageSection = document.getElementById('contactPageSection');
    const resumeSection = document.getElementById('resumeSection');
    const workExperienceSection = document.querySelector('.work-experience');
    const educationSection = document.querySelector('.education');
    const workExpBtn = document.getElementById('workExpBtn');
    const homeBtn = document.getElementById('homeBtn');
    const blogBtn = document.getElementById('blogBtn');
    const contactBtn = document.getElementById('contactBtn');
    const resumeBtn = document.getElementById('resumeBtn');

    // If we're on a direct blog post page, redirect to main page
    if (!homeContent || !workExperienceSection) {
        window.location.href = '/';
        return;
    }

    if (homeContent) {
        homeContent.classList.remove('hidden');
        setTimeout(() => {
            homeContent.classList.add('fade-in');
            homeContent.classList.remove('fade-out');
        }, 10);
    }

    if (projectsSection) {
        projectsSection.classList.remove('hidden');
        setTimeout(() => {
            projectsSection.classList.add('fade-in');
            projectsSection.classList.remove('fade-out');
        }, 10);
    }

    if (workExperienceSection) {
        workExperienceSection.classList.remove('hidden');
        setTimeout(() => {
            workExperienceSection.classList.add('fade-in');
            workExperienceSection.classList.remove('fade-out');
        }, 10);
    }

    if (educationSection) {
        educationSection.classList.remove('hidden');
        setTimeout(() => {
            educationSection.classList.add('fade-in');
            educationSection.classList.remove('fade-out');
        }, 10);
    }

    if (blogSection) {
        blogSection.classList.add('fade-out');
        blogSection.classList.remove('fade-in');
        setTimeout(() => {
            blogSection.classList.add('hidden');
        }, 300);
    }

    if (blogPostContent) {
        blogPostContent.classList.add('fade-out');
        blogPostContent.classList.remove('fade-in');
        setTimeout(() => {
            blogPostContent.classList.add('hidden');
        }, 300);
    }

    if (contactPageSection) {
        contactPageSection.classList.add('fade-out');
        contactPageSection.classList.remove('fade-in');
        setTimeout(() => {
            contactPageSection.classList.add('hidden');
        }, 300);
    }

    if (resumeSection) {
        resumeSection.classList.add('fade-out');
        resumeSection.classList.remove('fade-in');
        resumeSection.classList.remove('full-view');
        setTimeout(() => {
            resumeSection.classList.add('hidden');
        }, 300);
    }

    // Remove resume view from body
    document.body.classList.remove('resume-view');

    if (workExpBtn) workExpBtn.classList.remove('active');
    if (homeBtn) homeBtn.classList.add('active');
    if (blogBtn) blogBtn.classList.remove('active');
    if (contactBtn) contactBtn.classList.remove('active');
    if (resumeBtn) resumeBtn.classList.remove('active');

    // Close mobile sidebars
    closeAllMobileSidebars();

    // Reset timeline items to default state (first item expanded, others collapsed)
    resetTimelineState();

    // Update browser URL - clear hash and blog post path
    window.history.pushState({ page: 'home' }, '', '/');
}

/**
 * Show only work experience section
 */
function showWorkExperience() {
    const homeContent = document.getElementById('homeContent');
    const projectsSection = document.getElementById('projectsSection');
    const blogSection = document.getElementById('blogSection');
    const blogPostContent = document.getElementById('blogPostContent');
    const contactPageSection = document.getElementById('contactPageSection');
    const resumeSection = document.getElementById('resumeSection');
    const workExperienceSection = document.querySelector('.work-experience');
    const educationSection = document.querySelector('.education');
    const workExpBtn = document.getElementById('workExpBtn');
    const homeBtn = document.getElementById('homeBtn');
    const blogBtn = document.getElementById('blogBtn');
    const contactBtn = document.getElementById('contactBtn');
    const resumeBtn = document.getElementById('resumeBtn');

    // If we're on a direct blog post page, redirect to main page with work hash
    if (!homeContent || !workExperienceSection) {
        window.location.href = '/#work';
        return;
    }

    if (homeContent) {
        homeContent.classList.add('fade-out');
        homeContent.classList.remove('fade-in');
        setTimeout(() => {
            homeContent.classList.add('hidden');
        }, 300);
    }

    if (projectsSection) {
        projectsSection.classList.add('fade-out');
        projectsSection.classList.remove('fade-in');
        setTimeout(() => {
            projectsSection.classList.add('hidden');
        }, 300);
    }

    if (workExperienceSection) {
        workExperienceSection.classList.remove('hidden');
        setTimeout(() => {
            workExperienceSection.classList.add('fade-in');
            workExperienceSection.classList.remove('fade-out');
        }, 10);
    }

    if (educationSection) {
        educationSection.classList.remove('hidden');
        setTimeout(() => {
            educationSection.classList.add('fade-in');
            educationSection.classList.remove('fade-out');
        }, 10);
    }

    if (blogSection) {
        blogSection.classList.add('fade-out');
        blogSection.classList.remove('fade-in');
        setTimeout(() => {
            blogSection.classList.add('hidden');
        }, 300);
    }

    if (blogPostContent) {
        blogPostContent.classList.add('fade-out');
        blogPostContent.classList.remove('fade-in');
        setTimeout(() => {
            blogPostContent.classList.add('hidden');
        }, 300);
    }

    if (contactPageSection) {
        contactPageSection.classList.add('fade-out');
        contactPageSection.classList.remove('fade-in');
        setTimeout(() => {
            contactPageSection.classList.add('hidden');
        }, 300);
    }

    if (resumeSection) {
        resumeSection.classList.add('fade-out');
        resumeSection.classList.remove('fade-in');
        resumeSection.classList.remove('full-view');
        setTimeout(() => {
            resumeSection.classList.add('hidden');
        }, 300);
    }

    // Remove resume view from body
    document.body.classList.remove('resume-view');

    // Expand all Work Experience and Education timeline items
    expandAllTimelineItems();

    if (workExpBtn) workExpBtn.classList.add('active');
    if (homeBtn) homeBtn.classList.remove('active');
    if (blogBtn) blogBtn.classList.remove('active');
    if (contactBtn) contactBtn.classList.remove('active');
    if (resumeBtn) resumeBtn.classList.remove('active');

    // Update browser URL - clear hash
    window.history.pushState({ page: 'work' }, '', '/');
}

/**
 * Show blog section
 */
function showBlog() {
    const homeContent = document.getElementById('homeContent');
    const projectsSection = document.getElementById('projectsSection');
    const blogSection = document.getElementById('blogSection');
    const blogPostContent = document.getElementById('blogPostContent');
    const contactPageSection = document.getElementById('contactPageSection');
    const resumeSection = document.getElementById('resumeSection');
    const workExperienceSection = document.querySelector('.work-experience');
    const educationSection = document.querySelector('.education');
    const workExpBtn = document.getElementById('workExpBtn');
    const homeBtn = document.getElementById('homeBtn');
    const blogBtn = document.getElementById('blogBtn');
    const contactBtn = document.getElementById('contactBtn');
    const resumeBtn = document.getElementById('resumeBtn');

    // If we're on a direct blog post page, redirect to main page blog
    if (!homeContent || !blogSection) {
        window.location.href = '/#blog';
        return;
    }

    if (homeContent) {
        homeContent.classList.add('fade-out');
        homeContent.classList.remove('fade-in');
        setTimeout(() => {
            homeContent.classList.add('hidden');
        }, 300);
    }

    if (projectsSection) {
        projectsSection.classList.add('fade-out');
        projectsSection.classList.remove('fade-in');
        setTimeout(() => {
            projectsSection.classList.add('hidden');
        }, 300);
    }

    if (workExperienceSection) {
        workExperienceSection.classList.add('fade-out');
        workExperienceSection.classList.remove('fade-in');
        setTimeout(() => {
            workExperienceSection.classList.add('hidden');
        }, 300);
    }

    if (educationSection) {
        educationSection.classList.add('fade-out');
        educationSection.classList.remove('fade-in');
        setTimeout(() => {
            educationSection.classList.add('hidden');
        }, 300);
    }

    if (blogPostContent) {
        blogPostContent.classList.add('fade-out');
        blogPostContent.classList.remove('fade-in');
        setTimeout(() => {
            blogPostContent.classList.add('hidden');
        }, 300);
    }

    if (contactPageSection) {
        contactPageSection.classList.add('fade-out');
        contactPageSection.classList.remove('fade-in');
        setTimeout(() => {
            contactPageSection.classList.add('hidden');
        }, 300);
    }

    if (resumeSection) {
        resumeSection.classList.add('fade-out');
        resumeSection.classList.remove('fade-in');
        resumeSection.classList.remove('full-view');
        setTimeout(() => {
            resumeSection.classList.add('hidden');
        }, 300);
    }

    // Remove resume view from body
    document.body.classList.remove('resume-view');

    if (blogSection) {
        blogSection.classList.remove('hidden');
        setTimeout(() => {
            blogSection.classList.add('fade-in');
            blogSection.classList.remove('fade-out');
        }, 10);
    }

    if (workExpBtn) workExpBtn.classList.remove('active');
    if (homeBtn) homeBtn.classList.remove('active');
    if (blogBtn) blogBtn.classList.add('active');
    if (contactBtn) contactBtn.classList.remove('active');
    if (resumeBtn) resumeBtn.classList.remove('active');

    // Update browser URL - clear hash when navigating from main page
    window.history.pushState({ page: 'blog' }, '', '/');
}

/**
 * Show contact
 */
function showContact() {
    const homeContent = document.getElementById('homeContent');
    const projectsSection = document.getElementById('projectsSection');
    const blogSection = document.getElementById('blogSection');
    const blogPostContent = document.getElementById('blogPostContent');
    const contactPageSection = document.getElementById('contactPageSection');
    const resumeSection = document.getElementById('resumeSection');
    const workExperienceSection = document.querySelector('.work-experience');
    const educationSection = document.querySelector('.education');
    const workExpBtn = document.getElementById('workExpBtn');
    const homeBtn = document.getElementById('homeBtn');
    const blogBtn = document.getElementById('blogBtn');
    const contactBtn = document.getElementById('contactBtn');
    const resumeBtn = document.getElementById('resumeBtn');

    // If we're on a direct blog post page, redirect to main page contact
    if (!contactPageSection) {
        window.location.href = '/#contact';
        return;
    }

    if (homeContent) {
        homeContent.classList.add('hidden');
    }

    if (projectsSection) {
        projectsSection.classList.add('hidden');
    }

    if (workExperienceSection) {
        workExperienceSection.classList.add('hidden');
    }

    if (educationSection) {
        educationSection.classList.add('hidden');
    }

    if (blogSection) {
        blogSection.classList.add('hidden');
    }

    if (blogPostContent) {
        blogPostContent.classList.add('hidden');
    }

    if (resumeSection) {
        resumeSection.classList.add('hidden');
        resumeSection.classList.remove('full-view');
    }

    // Remove resume view from body
    document.body.classList.remove('resume-view');

    if (contactPageSection) {
        contactPageSection.classList.remove('hidden');
        setTimeout(() => {
            contactPageSection.classList.add('fade-in');
            contactPageSection.classList.remove('fade-out');
        }, 10);
    }

    if (workExpBtn) workExpBtn.classList.remove('active');
    if (homeBtn) homeBtn.classList.remove('active');
    if (blogBtn) blogBtn.classList.remove('active');
    if (contactBtn) contactBtn.classList.add('active');
    if (resumeBtn) resumeBtn.classList.remove('active');

    // Update browser URL - clear hash when navigating from main page
    window.history.pushState({ page: 'contact' }, '', '/');
}

/**
 * Show resume section
 */
function showResume() {
    const homeContent = document.getElementById('homeContent');
    const projectsSection = document.getElementById('projectsSection');
    const blogSection = document.getElementById('blogSection');
    const blogPostContent = document.getElementById('blogPostContent');
    const contactPageSection = document.getElementById('contactPageSection');
    const resumeSection = document.getElementById('resumeSection');
    const workExperienceSection = document.querySelector('.work-experience');
    const educationSection = document.querySelector('.education');
    const workExpBtn = document.getElementById('workExpBtn');
    const homeBtn = document.getElementById('homeBtn');
    const blogBtn = document.getElementById('blogBtn');
    const contactBtn = document.getElementById('contactBtn');
    const resumeBtn = document.getElementById('resumeBtn');

    // If we're on a direct blog post page, redirect to main page resume
    if (!resumeSection) {
        window.location.href = '/#resume';
        return;
    }

    if (homeContent) {
        homeContent.classList.add('hidden');
    }

    if (projectsSection) {
        projectsSection.classList.add('hidden');
    }

    if (workExperienceSection) {
        workExperienceSection.classList.add('hidden');
    }

    if (educationSection) {
        educationSection.classList.add('hidden');
    }

    if (blogSection) {
        blogSection.classList.add('hidden');
    }

    if (blogPostContent) {
        blogPostContent.classList.add('hidden');
    }

    if (contactPageSection) {
        contactPageSection.classList.add('hidden');
    }

    if (resumeSection) {
        resumeSection.classList.remove('hidden');
        resumeSection.classList.add('full-view');
        document.body.classList.add('resume-view');
        setTimeout(() => {
            resumeSection.classList.add('fade-in');
            resumeSection.classList.remove('fade-out');
        }, 10);
    }

    if (workExpBtn) workExpBtn.classList.remove('active');
    if (homeBtn) homeBtn.classList.remove('active');
    if (blogBtn) blogBtn.classList.remove('active');
    if (contactBtn) contactBtn.classList.remove('active');
    if (resumeBtn) resumeBtn.classList.add('active');

    // Update browser URL - clear hash when navigating from main page
    window.history.pushState({ page: 'resume' }, '', '/');
}

/**
 * Show blog post from list
 */
async function showBlogPostFromList(element) {
    const url = element.getAttribute('data-url');
    if (url) {
        await loadBlogPost(url);
    }
}

/**
 * Load blog post content via fetch
 */
async function loadBlogPost(url) {
    console.log('Loading blog post:', url);
    try {
        const response = await fetch(url);
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const postContent = doc.querySelector('.blog-post-full');
        
        console.log('Post content found:', !!postContent);
        
        if (postContent) {
            document.getElementById('blogPostFull').innerHTML = postContent.innerHTML;
            console.log('Content set');
        } else {
            // Fallback: try to get the main content
            const mainContent = doc.querySelector('main') || doc.querySelector('.content');
            if (mainContent) {
                document.getElementById('blogPostFull').innerHTML = `
                    <div class="blog-post-content">${mainContent.innerHTML}</div>
                `;
            } else {
                document.getElementById('blogPostFull').innerHTML = `
                    <div class="blog-post-content">
                        <p>Post content not available.</p>
                    </div>
                `;
            }
        }
        
        // Update browser URL
        if (url !== window.location.pathname) {
            window.history.pushState({ path: url }, '', url);
        }
        
        // Initialize Mermaid diagrams after content is loaded
        await initializeMermaid();
        
        showBlogPost();
    } catch (error) {
        console.error('Error loading blog post:', error);
        document.getElementById('blogPostFull').innerHTML = `
            <div class="blog-post-content">
                <p>Error loading post. Please try again.</p>
            </div>
        `;
        showBlogPost();
    }
}

/**
 * Initialize Mermaid diagrams
 */
async function initializeMermaid() {
    // Wait for mermaid to be available and content to be in DOM
    await new Promise(resolve => setTimeout(resolve, 300));
    
    if (typeof mermaid === 'undefined') {
        console.log('Mermaid not loaded yet');
        return;
    }
    
    // Find all mermaid code blocks
    const mermaidCodes = document.querySelectorAll('code.language-mermaid');
    console.log('Found mermaid code blocks:', mermaidCodes.length);
    
    // Convert code blocks to mermaid divs
    mermaidCodes.forEach((code) => {
        const pre = code.parentElement;
        if (pre.classList.contains('mermaid')) return;
        
        const div = document.createElement('div');
        div.className = 'mermaid';
        div.textContent = code.textContent.trim();
        pre.parentNode.replaceChild(div, pre);
    });
    
    // Initialize mermaid
    mermaid.initialize({ startOnLoad: false, theme: 'default' });
    
    // Find all .mermaid divs and render them
    const mermaidDivs = document.querySelectorAll('.mermaid');
    console.log('Found mermaid divs to render:', mermaidDivs.length);
    
    for (let i = 0; i < mermaidDivs.length; i++) {
        const div = mermaidDivs[i];
        if (div.querySelector('svg')) continue; // Already rendered
        
        try {
            const { svg } = await mermaid.render(`mermaid-${i}`, div.textContent);
            div.innerHTML = svg;
        } catch (err) {
            console.error('Error rendering mermaid diagram:', err);
            div.innerHTML = '<p style="color: red;">Error rendering diagram</p>';
        }
    }
    
    console.log('Mermaid rendering complete');
}

/**
 * Show single blog post
 */
function showBlogPost() {
    const homeContent = document.getElementById('homeContent');
    const projectsSection = document.getElementById('projectsSection');
    const blogSection = document.getElementById('blogSection');
    const workExperienceSection = document.querySelector('.work-experience');
    const educationSection = document.querySelector('.education');
    const blogPostContent = document.getElementById('blogPostContent');
    const workExpBtn = document.getElementById('workExpBtn');
    const homeBtn = document.getElementById('homeBtn');
    const blogBtn = document.getElementById('blogBtn');

    if (homeContent) {
        homeContent.classList.add('hidden');
    }

    if (projectsSection) {
        projectsSection.classList.add('hidden');
    }

    if (workExperienceSection) {
        workExperienceSection.classList.add('hidden');
    }

    if (educationSection) {
        educationSection.classList.add('hidden');
    }

    if (blogSection) {
        blogSection.classList.add('hidden');
    }

    if (blogPostContent) {
        blogPostContent.classList.remove('hidden');
        setTimeout(() => {
            blogPostContent.classList.add('fade-in');
            blogPostContent.classList.remove('fade-out');
        }, 10);
    }

    if (workExpBtn) workExpBtn.classList.remove('active');
    if (homeBtn) homeBtn.classList.remove('active');
    if (blogBtn) blogBtn.classList.add('active');
}

/**
 * Go back to blog list from single post
 */
function goBackToBlog() {
    const homeContent = document.getElementById('homeContent');
    const projectsSection = document.getElementById('projectsSection');
    const blogSection = document.getElementById('blogSection');
    const blogPostContent = document.getElementById('blogPostContent');
    const workExpBtn = document.getElementById('workExpBtn');
    const homeBtn = document.getElementById('homeBtn');
    const blogBtn = document.getElementById('blogBtn');

    // If we're on a direct blog post page, redirect to main page blog 
    if (!blogSection) {
        window.location.href = '/#blog';
        return;
    }

    if (homeContent) {
        homeContent.classList.add('hidden');
    }

    if (projectsSection) {
        projectsSection.classList.add('hidden');
    }

    if (blogSection) {
        blogSection.classList.remove('hidden');
        setTimeout(() => {
            blogSection.classList.add('fade-in');
            blogSection.classList.remove('fade-out');
        }, 10);
    }

    if (blogPostContent) {
        blogPostContent.classList.add('fade-out');
        blogPostContent.classList.remove('fade-in');
        setTimeout(() => {
            blogPostContent.classList.add('hidden');
        }, 300);
    }

    if (workExpBtn) workExpBtn.classList.remove('active');
    if (homeBtn) homeBtn.classList.remove('active');
    if (blogBtn) blogBtn.classList.add('active');

    // Update browser URL to blog 
    const currentPath = window.location.pathname;
    if (currentPath !== '/' && currentPath !== '/index.html') {
        window.history.pushState({ page: 'blog' }, '', '/#blog');
    } else if (!window.location.hash) {
        window.history.pushState({ page: 'blog' }, '', '/#blog');
    }
}

/**
 * Expand all timeline items in Work Experience and Education sections
 */
function expandAllTimelineItems() {
    const workExperienceSection = document.querySelector('.work-experience');
    const educationSection = document.querySelector('.education');

    [workExperienceSection, educationSection].forEach(section => {
        if (!section) return;

        const timelineItems = section.querySelectorAll('.timeline-item');
        timelineItems.forEach(item => {
            const header = item.querySelector('.timeline-header');
            const icon = item.querySelector('.toggle-icon');

            item.classList.remove('collapsed');
            item.classList.add('expanded');

            if (icon) {
                icon.classList.remove('fa-chevron-right');
                icon.classList.add('fa-chevron-down');
            }
        });
    });
}

/**
 * Reset timeline items to default state (first work item expanded, others collapsed)
 */
function resetTimelineState() {
    const workExperienceSection = document.querySelector('.work-experience');
    const educationSection = document.querySelector('.education');

    // Reset Work Experience (first item expanded, others collapsed)
    if (workExperienceSection) {
        const timelineItems = workExperienceSection.querySelectorAll('.timeline-item');
        timelineItems.forEach((item, index) => {
            const header = item.querySelector('.timeline-header');
            const icon = item.querySelector('.toggle-icon');

            if (index === 0) {
                // First item - expanded
                item.classList.remove('collapsed');
                item.classList.add('expanded');
                if (icon) {
                    icon.classList.remove('fa-chevron-right');
                    icon.classList.add('fa-chevron-down');
                }
            } else {
                // Other items - collapsed
                item.classList.remove('expanded');
                item.classList.add('collapsed');
                if (icon) {
                    icon.classList.remove('fa-chevron-down');
                    icon.classList.add('fa-chevron-right');
                }
            }
        });
    }

    // Reset Education (all collapsed)
    if (educationSection) {
        const timelineItems = educationSection.querySelectorAll('.timeline-item');
        timelineItems.forEach(item => {
            const header = item.querySelector('.timeline-header');
            const icon = item.querySelector('.toggle-icon');

            item.classList.remove('expanded');
            item.classList.add('collapsed');
            if (icon) {
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-right');
            }
        });
    }
}

/**
 * Initialize timeline items state
 * Ensures the first work experience item is expanded by default
 */
function initTimeline() {
    const workExperienceSection = document.querySelector('.work-experience');
    if (!workExperienceSection) return;

    const timelineItems = workExperienceSection.querySelectorAll('.timeline-item');

    timelineItems.forEach((item, index) => {
        const header = item.querySelector('.timeline-header');
        const icon = item.querySelector('.toggle-icon');

        if (index === 0) {
            // First item (latest job) - expanded
            item.classList.add('expanded');
            item.classList.remove('collapsed');
            if (icon) {
                icon.classList.remove('fa-chevron-right');
                icon.classList.add('fa-chevron-down');
            }
        } else {
            // All other items - collapsed
            item.classList.add('collapsed');
            item.classList.remove('expanded');
            if (icon) {
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-right');
            }
        }

        // Add click event listener
        if (header) {
            header.addEventListener('click', toggleTimeline);
            header.style.cursor = 'pointer';
        }
    });
}

/**
 * Initialize educationSection  (all .collapsed)
 */
function initEducation() {
    const educationSection = document.querySelector('.education');
    if (!educationSection) return;

    const timelineItems = educationSection.querySelectorAll('.timeline-item');

    timelineItems.forEach(item => {
        const header = item.querySelector('.timeline-header');
        const icon = item.querySelector('.toggle-icon');

        // All education items - collapsed
        item.classList.add('collapsed');
        item.classList.remove('expanded');
        if (icon) {
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-right');
        }

        // Add click event listener
        if (header) {
            header.addEventListener('click', toggleTimeline);
            header.style.cursor = 'pointer';
        }
    });
}

/**
 * Initialize all interactive elements
 */
document.addEventListener('DOMContentLoaded', () => {
    initTimeline();
    initEducation();
    initProjectButtons();

    // Handle browser back/forward buttons
    window.addEventListener('popstate', (event) => {
        if (event.state && event.state.path) {
            // Load the post from history state
            loadBlogPost(event.state.path);
        } else if (event.state && event.state.page === 'blog') {
            // Show blog 
            showBlog();
        } else if (event.state && event.state.page === 'work') {
            // Show work experience 
            showWorkExperience();
        } else if (event.state && event.state.page === 'contact') {
            // Show contact 
            showContact();
        } else {
            // Go back to home
            showHome();
        }
    });

    // Handle direct navigation with hashes
    const hash = window.location.hash;
    if (hash === '#blog') {
        showBlog();
    } else if (hash === '#work') {
        // Wait a bit for DOM to be ready
        setTimeout(() => {
            showWorkExperience();
        }, 100);
    } else if (hash === '#contact') {
        showContact();
    } else if (hash === '#resume') {
        showResume();
    }

    console.log('Portfolio initialized successfully!');
});

/**
 * Toggle mobile sidebar
 */
function toggleMobileSidebar(side) {
    const overlay = document.getElementById('mobileOverlay');
    
    if (side === 'left') {
        const column1 = document.querySelector('.column-1');
        const column3 = document.querySelector('.column-3');
        
        if (column1 && column1.classList.contains('slide-in')) {
            column1.classList.remove('slide-in');
            if (overlay) overlay.classList.remove('active');
        } else if (column1) {
            if (column3) column3.classList.remove('slide-in');
            column1.classList.add('slide-in');
            if (overlay) overlay.classList.add('active');
        }
    } else if (side === 'right') {
        const column1 = document.querySelector('.column-1');
        const column3 = document.querySelector('.column-3');
        
        if (column3 && column3.classList.contains('slide-in')) {
            column3.classList.remove('slide-in');
            if (overlay) overlay.classList.remove('active');
        } else if (column3) {
            if (column1) column1.classList.remove('slide-in');
            column3.classList.add('slide-in');
            if (overlay) overlay.classList.add('active');
        }
    }
}

/**
 * Close all mobile sidebars
 */
function closeAllMobileSidebars() {
    const column1 = document.querySelector('.column-1');
    const column3 = document.querySelector('.column-3');
    const overlay = document.getElementById('mobileOverlay');
    
    if (column1) column1.classList.remove('slide-in');
    if (column3) column3.classList.remove('slide-in');
    if (overlay) overlay.classList.remove('active');
}

/**
 * Print resume
 */
function printResume() {
    window.print();
}

/**
 * Handle subject dropdown change
 */
function handleSubjectChange() {
    const select = document.getElementById('contactSubjectSelect');
    const customInput = document.getElementById('contactSubject');

    if (select.value === 'Other') {
        customInput.classList.add('active');
        customInput.required = true;
        customInput.placeholder = 'Enter your subject...';
    } else if (select.value) {
        customInput.classList.remove('active');
        customInput.required = false;
        customInput.value = select.value;
    } else {
        customInput.classList.remove('active');
        customInput.required = false;
        customInput.value = '';
    }
}

/**
 * Submit contact form
 */
async function submitContactForm(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            alert('Thank you for your message! I will get back to you soon.');
            form.reset();
        } else {
            const error = await response.json();
            alert('Oops! There was a problem sending your message. Please try again.');
            console.error('Form submission error:', error);
        }
    } catch (error) {
        alert('Oops! There was a problem sending your message. Please try again.');
        console.error('Form submission error:', error);
    }

    return false;
}

/**
 * Initialize project card buttons
 */
function initProjectButtons() {
    const projectButtons = document.querySelectorAll('.project-link-btn');

    projectButtons.forEach(button => {
        // Store original description for closed source _projects
        const cardBack = button.closest('.project-card-back');
        if (cardBack && button.getAttribute('data-type') === 'closed') {
            const description = cardBack.querySelector('.project-description');
            if (description) {
                button.setAttribute('data-original-description', description.textContent);
            }
        }

        button.addEventListener('click', (event) => {
            event.stopPropagation();

            const link = button.getAttribute('data-link');
            const type = button.getAttribute('data-type');
            const cardBack = button.closest('.project-card-back');

            if (type === 'public' && link) {
                // Open link in new tab
                window.open(link, '_blank');
            } else if (type === 'closed') {
                // Toggle closed source state
                if (cardBack) {
                    const description = cardBack.querySelector('.project-description');
                    const isClosedSource = cardBack.classList.contains('closed-source');

                    if (isClosedSource) {
                        // Revert to original state
                        cardBack.classList.remove('closed-source');
                        if (description) {
                            description.textContent = button.getAttribute('data-original-description');
                        }
                        button.textContent = 'View Project';
                    } else {
                        // Show closed source message
                        cardBack.classList.add('closed-source');
                        if (description) {
                            description.textContent = 'Project is closed source / proprietary.';
                        }
                        button.textContent = 'Closed Source';
                    }
                }
            }
        });
    });
}
