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
    
    // Remove contact view from body
    document.body.classList.remove('contact-view');

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
    
    // Remove contact view from body
    document.body.classList.remove('contact-view');

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
    
    // Remove contact view from body
    document.body.classList.remove('contact-view');

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
    
    // Add contact view class to body
    document.body.classList.add('contact-view');

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
    try {
        const response = await fetch(url);
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const postContent = doc.querySelector('.blog-post-full');

        if (postContent) {
            document.getElementById('blogPostFull').innerHTML = postContent.innerHTML;
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
        return;
    }

    // Find all mermaid code blocks
    const mermaidCodes = document.querySelectorAll('code.language-mermaid');

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

    for (let i = 0; i < mermaidDivs.length; i++) {
        const div = mermaidDivs[i];
        if (div.querySelector('svg')) continue; // Already rendered

        try {
            const { svg } = await mermaid.render(`mermaid-${i}`, div.textContent);
            div.innerHTML = svg;
        } catch (err) {
            div.innerHTML = '<p style="color: red;">Error rendering diagram</p>';
        }
    }
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
    
    // Remove contact view from body
    document.body.classList.remove('contact-view');
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
    
    // Remove contact view from body
    document.body.classList.remove('contact-view');

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

        const timelineItems = section.querySelectorAll('.experience-card');
        timelineItems.forEach(item => {
            const header = item.querySelector('.experience-header');
            const icon = header.querySelector('.experience-toggle i');

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
        const timelineItems = workExperienceSection.querySelectorAll('.experience-card');
        timelineItems.forEach((item, index) => {
            const header = item.querySelector('.experience-header');
            const icon = header.querySelector('.experience-toggle i');

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
        const timelineItems = educationSection.querySelectorAll('.experience-card');
        timelineItems.forEach(item => {
            const header = item.querySelector('.experience-header');
            const icon = header.querySelector('.experience-toggle i');

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
 * Toggle experience card expand/collapse
 */
function toggleExperienceCard(header) {
    const card = header.closest('.experience-card');
    const icon = header.querySelector('.experience-toggle i');

    if (!card) return;

    card.classList.toggle('expanded');
    card.classList.toggle('collapsed');

    if (icon) {
        icon.classList.toggle('fa-chevron-down');
        icon.classList.toggle('fa-chevron-right');
    }
}

/**
 * Initialize timeline items state
 * Home page: First work experience item expanded, rest collapsed
 * Resume page: All work experience items expanded
 */
function initTimeline() {
    const workExperienceSection = document.querySelector('.work-experience');
    if (!workExperienceSection) return;

    const timelineItems = workExperienceSection.querySelectorAll('.experience-card');
    const isResumeView = document.body.classList.contains('resume-view');

    timelineItems.forEach((item, index) => {
        const header = item.querySelector('.experience-header');
        const icon = item.querySelector('.experience-toggle i');

        if (isResumeView) {
            // Resume page - all expanded
            item.classList.add('expanded');
            item.classList.remove('collapsed');
            if (icon) {
                icon.classList.remove('fa-chevron-right');
                icon.classList.add('fa-chevron-down');
            }
        } else {
            // Home page - first expanded, rest collapsed
            if (index === 0) {
                item.classList.add('expanded');
                item.classList.remove('collapsed');
                if (icon) {
                    icon.classList.remove('fa-chevron-right');
                    icon.classList.add('fa-chevron-down');
                }
            } else {
                item.classList.add('collapsed');
                item.classList.remove('expanded');
                if (icon) {
                    icon.classList.remove('fa-chevron-down');
                    icon.classList.add('fa-chevron-right');
                }
            }
        }
    });
}

/**
 * Initialize education section (all collapsed on home page)
 */
function initEducation() {
    const educationSection = document.querySelector('.education');
    if (!educationSection) return;

    const timelineItems = educationSection.querySelectorAll('.experience-card');

    timelineItems.forEach(item => {
        const header = item.querySelector('.experience-header');
        const icon = header.querySelector('.experience-toggle i');

        // All education items - collapsed
        item.classList.add('collapsed');
        item.classList.remove('expanded');
        if (icon) {
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-right');
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
    const customWrapper = document.querySelector('.subject-custom-wrapper');
    const customInput = document.getElementById('contactSubject');

    if (select.value === 'other') {
        customWrapper.classList.add('active');
        customInput.required = true;
        customInput.placeholder = 'Enter your subject...';
    } else if (select.value) {
        customWrapper.classList.remove('active');
        customInput.required = false;
        customInput.value = select.value;
    } else {
        customWrapper.classList.remove('active');
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
        }
    } catch (error) {
        alert('Oops! There was a problem sending your message. Please try again.');
    }

    return false;
}

/**
 * Initialize project card buttons
 * New design uses direct <a> links for public projects
 */
function initProjectButtons() {
    // Public projects now use direct <a> tags with target="_blank"
    // No JavaScript handling needed for them
    
    // Add hover effect for closed source projects (optional enhancement)
    const closedProjects = document.querySelectorAll('.project-card[data-visibility="closed"]');
    
    closedProjects.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Could add future interactions here if needed
        });
    });
}

/**
 * Display timezone difference between visitor and configured timezone
 */
function updateTimezoneDifference() {
    const timezoneText = document.getElementById('timezoneText');
    if (!timezoneText) return;

    // Get configured timezone from data attribute or default to Asia/Manila
    const configuredTimezone = timezoneText.getAttribute('data-timezone') || 'Asia/Manila';
    const configuredLocation = timezoneText.getAttribute('data-location') || 'Tacloban City';

    const now = new Date();

    // Get configured location time
    const locationTime = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: configuredTimezone
    });

    // Get visitor's local time
    const localTime = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });

    // Calculate time difference using date objects
    // Get current UTC time
    const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
    
    // Get configured location UTC offset
    const locationDate = new Date(now.toLocaleString('en-US', { timeZone: configuredTimezone }));
    const localDate = now;
    
    // Calculate hour difference
    const localHour = now.getHours();
    const locationHour = locationDate.getHours();
    let diffHours = locationHour - localHour;

    // Adjust for day wraparound
    if (diffHours > 12) diffHours -= 24;
    if (diffHours < -12) diffHours += 24;

    let timeDiffText = '';
    let titleText = `It's ${locationTime} in ${configuredLocation}`;

    if (diffHours === 0) {
        // Same timezone - just show time
        timeDiffText = localTime;
    } else if (diffHours > 0) {
        // Location is ahead
        timeDiffText = `${localTime} (I'm ${Math.abs(diffHours)}h ahead of you.)`;
    } else {
        // Location is behind
        timeDiffText = `${localTime} (I'm ${Math.abs(diffHours)}h behind you.)`;
    }

    timezoneText.textContent = timeDiffText;
    timezoneText.parentElement.title = titleText;
}

// Update timezone on page load and every minute
document.addEventListener('DOMContentLoaded', function() {
    updateTimezoneDifference();
    setInterval(updateTimezoneDifference, 60000); // Update every 60 seconds
});

/**
 * Scroll to top functionality
 */
function scrollToTop() {
    const isMobileTablet = window.innerWidth <= 1200;
    
    if (isMobileTablet) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    } else {
        const mainContent = document.getElementById('mainContent');
        if (mainContent) {
            mainContent.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }
}

/**
 * Toggle scroll-to-top button visibility based on scroll position
 */
function toggleScrollToTopButton() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const mainContent = document.getElementById('mainContent');
    
    if (!scrollToTopBtn) return;
    
    // Check if we're on a page where the button should show
    const homeContent = document.getElementById('homeContent');
    const workExperienceSection = document.querySelector('.work-experience');
    const blogSection = document.getElementById('blogSection');
    const blogPostContent = document.getElementById('blogPostContent');
    const contactPageSection = document.getElementById('contactPageSection');
    const resumeSection = document.getElementById('resumeSection');
    
    // Hide on Resume page only
    const shouldHideOnPage = (
        (resumeSection && !resumeSection.classList.contains('hidden'))
    );
    
    if (shouldHideOnPage) {
        scrollToTopBtn.classList.remove('visible');
        return;
    }
    
    // Show on Home, Work Experience, Blog, Blog Post, and Contact
    const shouldShowOnPage = (
        (homeContent && !homeContent.classList.contains('hidden')) ||
        (workExperienceSection && !workExperienceSection.classList.contains('hidden')) ||
        (blogSection && !blogSection.classList.contains('hidden')) ||
        (blogPostContent && !blogPostContent.classList.contains('hidden')) ||
        (contactPageSection && !contactPageSection.classList.contains('hidden'))
    );
    
    if (!shouldShowOnPage) {
        scrollToTopBtn.classList.remove('visible');
        return;
    }
    
    // On mobile/tablet (<=1200px), scroll happens on window/body
    // On desktop (>1200px), scroll happens on mainContent
    let scrollTop = 0;
    const isMobileTablet = window.innerWidth <= 1200;
    
    if (isMobileTablet) {
        scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    } else {
        // Desktop - check mainContent scroll
        if (mainContent) {
            scrollTop = mainContent.scrollTop;
        }
    }
    
    // Show button only when scrolled more than 300px
    if (scrollTop > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
}

// Add scroll event listener for scroll-to-top button
document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.getElementById('mainContent');
    if (mainContent) {
        mainContent.addEventListener('scroll', toggleScrollToTopButton);
    }
    window.addEventListener('scroll', toggleScrollToTopButton);
    window.addEventListener('resize', toggleScrollToTopButton);
    
    // Initial check on page load
    setTimeout(toggleScrollToTopButton, 100);
});
