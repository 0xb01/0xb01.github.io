/**
 * ====================================================================
 * Banikaz Engineering Portfolio - Core Application & Routing Script
 * Architecture: Modular Vanilla JS with Hash Routing & State Handling
 * ====================================================================
 */

// ====================================================================
// 1. Theme Management (True Dark / Clean Light)
// ====================================================================
const ThemeManager = {
    STORAGE_KEY: 'site-theme',

    init() {
        const currentTheme = this.getTheme();
        this.applyTheme(currentTheme, false);
    },

    getTheme() {
        const saved = localStorage.getItem(this.STORAGE_KEY);
        if (saved) return saved;
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    },

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(this.STORAGE_KEY, theme);
        this.updateIcons(theme);
    },

    toggle() {
        const current = document.documentElement.getAttribute('data-theme') || 'dark';
        const next = current === 'dark' ? 'light' : 'dark';
        this.setTheme(next);
        ToastManager.show(`Switched to ${next} theme`, 'info', 2000);
    },

    applyTheme(theme, showToast = false) {
        document.documentElement.setAttribute('data-theme', theme);
        this.updateIcons(theme);
        if (showToast) {
            ToastManager.show(`Active theme: ${theme}`, 'info', 1500);
        }
    },

    updateIcons(theme) {
        const icons = document.querySelectorAll('#themeIcon, #themeIconMobile');
        icons.forEach(icon => {
            if (theme === 'light') {
                icon.className = 'fas fa-sun';
            } else {
                icon.className = 'fas fa-moon';
            }
        });
    }
};

function toggleTheme() {
    ThemeManager.toggle();
}

// ====================================================================
// 2. Toast Notification System
// ====================================================================
const ToastManager = {
    getContainer() {
        let container = document.getElementById('toastContainer');
        if (!container) {
            container = document.createElement('div');
            container.id = 'toastContainer';
            container.className = 'toast-container';
            container.setAttribute('aria-live', 'polite');
            document.body.appendChild(container);
        }
        return container;
    },

    show(message, type = 'info', duration = 3000) {
        const container = this.getContainer();
        const toast = document.createElement('div');
        toast.className = `toast-item toast-${type}`;

        let iconClass = 'fa-circle-info';
        if (type === 'success') iconClass = 'fa-circle-check';
        if (type === 'error') iconClass = 'fa-circle-xmark';
        if (type === 'warning') iconClass = 'fa-triangle-exclamation';

        toast.innerHTML = `
            <i class="fas ${iconClass} toast-icon"></i>
            <span class="toast-text">${message}</span>
            <button class="toast-close" aria-label="Close notification" onclick="this.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        `;

        container.appendChild(toast);

        requestAnimationFrame(() => {
            toast.classList.add('visible');
        });

        setTimeout(() => {
            toast.classList.remove('visible');
            setTimeout(() => toast.remove(), 300);
        }, duration);
    }
};

function showToast(message, type = 'info', duration = 3000) {
    ToastManager.show(message, type, duration);
}

// Copy to clipboard with toast notification
async function copyToClipboard(text, successMessage = 'Copied to clipboard!') {
    try {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
        } else {
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            textArea.style.top = '-999999px';
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            document.execCommand('copy');
            textArea.remove();
        }
        ToastManager.show(successMessage, 'success', 2500);
    } catch (err) {
        console.error('Clipboard copy failed:', err);
        ToastManager.show('Failed to copy', 'error', 2500);
    }
}

// ====================================================================
// 3. Router & View Management
// ====================================================================
const AppRouter = {
    routes: ['home', 'experience', 'projects', 'blog', 'blog-post', 'contact', 'resume'],

    init() {
        window.addEventListener('hashchange', () => this.handleRoute());
        this.handleRoute();
    },

    parseHash() {
        const rawHash = window.location.hash.replace(/^#\/?/, '').trim();
        if (!rawHash) return { route: 'home', param: '' };

        if (rawHash.startsWith('post:')) {
            const postUrl = decodeURIComponent(rawHash.replace(/^post:/, ''));
            return { route: 'blog-post', param: postUrl };
        }

        const lower = rawHash.toLowerCase();
        if (lower === 'blog-post') {
            return { route: 'blog-post', param: '' };
        }

        if (this.routes.includes(lower)) {
            return { route: lower, param: '' };
        }

        if (rawHash.startsWith('tech/') || rawHash.startsWith('music/')) {
            return { route: 'blog-post', param: '/' + rawHash };
        }

        return { route: 'home', param: '' };
    },

    navigate(route, param = '') {
        if (route === 'blog-post' && param) {
            window.location.hash = `#post:${encodeURIComponent(param)}`;
        } else {
            window.location.hash = `#${route}`;
        }
    },

    handleRoute() {
        const { route, param } = this.parseHash();
        this.setActiveNav(route);
        this.renderView(route, param);
        closeAllMobileSidebars();
    },

    setActiveNav(route) {
        const navButtons = document.querySelectorAll('.nav-btn');
        navButtons.forEach(btn => {
            const btnRoute = btn.getAttribute('data-route') || '';
            const btnId = btn.id || '';

            const isActive = (btnRoute === route) ||
                (route === 'home' && (btnRoute === 'home' || btnId === 'homeBtn')) ||
                (route === 'experience' && (btnRoute === 'experience' || btnId === 'workExpBtn')) ||
                (route === 'projects' && (btnRoute === 'projects' || btnId === 'projectsBtn')) ||
                ((route === 'blog' || route === 'blog-post') && (btnRoute === 'blog' || btnId === 'blogBtn')) ||
                (route === 'contact' && (btnRoute === 'contact' || btnId === 'contactBtn')) ||
                (route === 'resume' && (btnRoute === 'resume' || btnId === 'resumeBtn'));

            if (isActive) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Sync mobile bottom navigation tab bar
        const mobileTabs = document.querySelectorAll('.mobile-tab-btn');
        mobileTabs.forEach(tab => {
            const tabName = tab.getAttribute('data-tab');
            const isActive = (tabName === route) || (tabName === 'blog' && route === 'blog-post');
            if (isActive) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
    },

    renderView(route, param = '') {
        const homeContent = document.getElementById('homeContent');
        const workExpSection = document.getElementById('workExperienceSection');
        const educationSection = document.getElementById('educationSection');
        const projectsSection = document.getElementById('projectsSection');
        const blogSection = document.getElementById('blogSection');
        const blogPostContent = document.getElementById('blogPostContent');
        const contactPageSection = document.getElementById('contactPageSection');
        const resumeSection = document.getElementById('resumeSection');
        const resumeBackBtn = document.getElementById('resumeBackBtn');

        // Hide all major sections first
        const allSections = [
            homeContent,
            workExpSection,
            educationSection,
            projectsSection,
            blogSection,
            blogPostContent,
            contactPageSection,
            resumeSection
        ];

        allSections.forEach(sec => {
            if (sec) sec.classList.add('hidden');
        });

        // Toggle layout classes on body
        if (route === 'resume') {
            document.body.classList.add('resume-view');
            if (resumeBackBtn) resumeBackBtn.classList.remove('hidden');
        } else {
            document.body.classList.remove('resume-view');
            if (resumeBackBtn) resumeBackBtn.classList.add('hidden');
        }

        // Hide Column 3 on blog and blog-post views
        if (route === 'blog' || route === 'blog-post') {
            document.body.classList.add('blog-view');
        } else {
            document.body.classList.remove('blog-view');
        }

        if (route === 'contact') {
            document.body.classList.add('contact-view');
        } else {
            document.body.classList.remove('contact-view');
        }

        const mainContent = document.getElementById('mainContent');
        if (mainContent) mainContent.scrollTop = 0;
        window.scrollTo({ top: 0, behavior: 'smooth' });

        switch (route) {
            case 'home':
                if (homeContent) homeContent.classList.remove('hidden');
                if (workExpSection) workExpSection.classList.remove('hidden');
                if (educationSection) educationSection.classList.remove('hidden');
                if (projectsSection) projectsSection.classList.remove('hidden');
                break;

            case 'experience':
                if (workExpSection) workExpSection.classList.remove('hidden');
                if (educationSection) educationSection.classList.remove('hidden');
                if (workExpSection) {
                    workExpSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
                break;

            case 'projects':
                if (projectsSection) {
                    projectsSection.classList.remove('hidden');
                    projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
                break;

            case 'blog':
                if (blogSection) {
                    blogSection.classList.remove('hidden');
                    blogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
                break;

            case 'blog-post':
                if (blogPostContent) {
                    blogPostContent.classList.remove('hidden');
                    if (param) {
                        loadAndRenderBlogPost(param);
                    }
                }
                break;

            case 'contact':
                if (contactPageSection) {
                    contactPageSection.classList.remove('hidden');
                    contactPageSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
                break;

            case 'resume':
                if (resumeSection) {
                    resumeSection.classList.remove('hidden');
                }
                break;

            default:
                if (homeContent) homeContent.classList.remove('hidden');
                if (workExpSection) workExpSection.classList.remove('hidden');
                if (educationSection) educationSection.classList.remove('hidden');
                if (projectsSection) projectsSection.classList.remove('hidden');
                break;
        }
    }
};

function navigateToRoute(route) {
    AppRouter.navigate(route);
}

// Backward-compatibility navigation aliases
function showHome() { navigateToRoute('home'); }
function showWorkExperience() { navigateToRoute('experience'); }
function showProjects() { navigateToRoute('projects'); }
function showBlog() { navigateToRoute('blog'); }
function showContact() { navigateToRoute('contact'); }
function showResume() { navigateToRoute('resume'); }

// ====================================================================
// 4. Project Filtering & Live Search
// ====================================================================
const ProjectFilter = {
    init() {
        this.populateDropdowns();
        this.updateCount();
    },

    populateDropdowns() {
        const projectCards = document.querySelectorAll('.project-card');
        const techFilter = document.getElementById('techFilter');
        const yearFilter = document.getElementById('yearFilter');

        if (!projectCards.length) return;

        if (yearFilter) {
            const years = [...new Set([...projectCards].map(c => c.dataset.year).filter(Boolean))].sort((a, b) => b - a);
            yearFilter.innerHTML = '<option value="all">All Years</option>';
            years.forEach(y => {
                const opt = document.createElement('option');
                opt.value = y;
                opt.textContent = y;
                yearFilter.appendChild(opt);
            });
        }

        if (techFilter) {
            const techSet = new Set();
            projectCards.forEach(card => {
                const tags = card.dataset.tech ? card.dataset.tech.split(',') : [];
                tags.forEach(t => {
                    const clean = t.trim();
                    if (clean) techSet.add(clean);
                });
            });

            const sortedTech = [...techSet].sort((a, b) => a.localeCompare(b));
            techFilter.innerHTML = '<option value="all">All Technologies</option>';
            sortedTech.forEach(t => {
                const opt = document.createElement('option');
                opt.value = t.toLowerCase();
                opt.textContent = t.charAt(0).toUpperCase() + t.slice(1);
                techFilter.appendChild(opt);
            });
        }
    },

    filter() {
        const searchInput = document.getElementById('projectSearchInput');
        const techFilter = document.getElementById('techFilter');
        const yearFilter = document.getElementById('yearFilter');
        const searchClear = document.getElementById('projectSearchClear');
        const emptyState = document.getElementById('projectsEmpty');

        const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
        const selectedTech = techFilter ? techFilter.value.toLowerCase() : 'all';
        const selectedYear = yearFilter ? yearFilter.value : 'all';

        if (searchClear) {
            if (query.length > 0) {
                searchClear.classList.remove('hidden');
            } else {
                searchClear.classList.add('hidden');
            }
        }

        const projectCards = document.querySelectorAll('.project-card');
        let visibleCount = 0;

        projectCards.forEach(card => {
            const year = card.dataset.year || '';
            const tech = (card.dataset.tech || '').toLowerCase();
            const name = (card.dataset.name || '').toLowerCase();
            const desc = (card.dataset.desc || '').toLowerCase();

            const matchesYear = (selectedYear === 'all' || year === selectedYear);
            const matchesTech = (selectedTech === 'all' || tech.includes(selectedTech));
            const matchesQuery = (!query || name.includes(query) || desc.includes(query) || tech.includes(query));

            if (matchesYear && matchesTech && matchesQuery) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        if (emptyState) {
            if (visibleCount === 0) {
                emptyState.classList.remove('hidden');
            } else {
                emptyState.classList.add('hidden');
            }
        }

        this.updateCount(visibleCount, projectCards.length);
    },

    updateCount(visible, total) {
        const badge = document.getElementById('projectCountBadge');
        if (!badge) return;
        const projectCards = document.querySelectorAll('.project-card');
        const tot = total !== undefined ? total : projectCards.length;
        const vis = visible !== undefined ? visible : tot;

        if (vis === tot) {
            badge.textContent = `${tot}`;
        } else {
            badge.textContent = `${vis} / ${tot}`;
        }
    },

    reset() {
        const searchInput = document.getElementById('projectSearchInput');
        const techFilter = document.getElementById('techFilter');
        const yearFilter = document.getElementById('yearFilter');

        if (searchInput) searchInput.value = '';
        if (techFilter) techFilter.value = 'all';
        if (yearFilter) yearFilter.value = 'all';

        this.filter();
        ToastManager.show('Project filters reset', 'info', 1500);
    }
};

function handleProjectSearch() {
    ProjectFilter.filter();
}

function clearProjectSearch() {
    const searchInput = document.getElementById('projectSearchInput');
    if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
    }
    ProjectFilter.filter();
}

function filterProjects() {
    ProjectFilter.filter();
}

function filterProjectsByYear() {
    ProjectFilter.filter();
}

function resetProjectFilters() {
    ProjectFilter.reset();
}

function filterByTechTag(tagName) {
    AppRouter.navigate('projects');
    const techFilter = document.getElementById('techFilter');
    if (techFilter) {
        const tagLower = tagName.trim().toLowerCase();
        let matched = false;

        for (let i = 0; i < techFilter.options.length; i++) {
            if (techFilter.options[i].value.toLowerCase() === tagLower || techFilter.options[i].text.toLowerCase() === tagLower) {
                techFilter.selectedIndex = i;
                matched = true;
                break;
            }
        }

        if (!matched) {
            const searchInput = document.getElementById('projectSearchInput');
            if (searchInput) searchInput.value = tagName;
        }
    }

    ProjectFilter.filter();
    ToastManager.show(`Filtered by tag: ${tagName}`, 'info', 2000);
}

// ====================================================================
// 5. Timeline Interactions (Work Experience & Education)
// ====================================================================
function toggleExperienceCard(headerElement) {
    const card = headerElement.closest('.experience-card');
    if (!card) return;

    const isExpanded = card.classList.contains('expanded');
    if (isExpanded) {
        card.classList.remove('expanded');
        card.classList.add('collapsed');
    } else {
        card.classList.remove('collapsed');
        card.classList.add('expanded');
    }
}

function toggleAllTimelineCards() {
    const cards = document.querySelectorAll('.experience-card');
    if (!cards.length) return;

    const someCollapsed = Array.from(cards).some(c => c.classList.contains('collapsed'));

    cards.forEach(card => {
        if (someCollapsed) {
            card.classList.remove('collapsed');
            card.classList.add('expanded');
        } else {
            card.classList.remove('expanded');
            card.classList.add('collapsed');
        }
    });

    const btn = document.getElementById('expandAllBtn');
    if (btn) {
        const span = btn.querySelector('span');
        if (span) span.textContent = someCollapsed ? 'Collapse All' : 'Expand All';
    }

    ToastManager.show(someCollapsed ? 'Expanded all positions' : 'Collapsed all positions', 'info', 1500);
}

// ====================================================================
// 6. Blog Dynamic Loading & Reading
// ====================================================================
function showBlogPostFromList(cardElement) {
    const url = cardElement.getAttribute('data-url');
    if (!url) return;
    AppRouter.navigate('blog-post', url);
}

async function loadAndRenderBlogPost(url) {
    const blogPostContent = document.getElementById('blogPostContent');
    const blogPostFull = document.getElementById('blogPostFull');

    if (!blogPostContent || !blogPostFull) {
        window.location.href = url;
        return;
    }

    blogPostFull.innerHTML = `
        <div class="blog-loading-state">
            <i class="fas fa-spinner fa-spin"></i>
            <p>Loading article content...</p>
        </div>
    `;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network error');
        const html = await response.text();

        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        const postMeta = doc.querySelector('.blog-post-meta');
        const content = doc.querySelector('.blog-post-content');
        const shareSection = doc.querySelector('.share-section');

        let fullHTML = '';
        if (postMeta) fullHTML += postMeta.outerHTML;
        if (content) fullHTML += content.outerHTML;
        if (shareSection) fullHTML += shareSection.outerHTML;

        if (!fullHTML) {
            const main = doc.querySelector('main') || doc.querySelector('article');
            fullHTML = main ? main.innerHTML : '<p>Article content unavailable.</p>';
        }

        blogPostFull.innerHTML = fullHTML;

        // Render Mermaid Diagrams if present
        await renderMermaidInElement(blogPostFull);

        const mainContent = document.getElementById('mainContent');
        if (mainContent) mainContent.scrollTop = 0;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
        console.error('Failed to load blog post:', err);
        blogPostFull.innerHTML = `
            <div class="blog-error-state">
                <i class="fas fa-triangle-exclamation"></i>
                <p>Could not load article inline.</p>
                <a href="${url}" class="hero-btn primary">Open Direct Link</a>
            </div>
        `;
    }
}

function goBackToBlog() {
    if (!document.getElementById('blogSection')) {
        window.location.href = '/#blog';
        return;
    }
    AppRouter.navigate('blog');
}

async function renderMermaidInElement(container) {
    if (typeof mermaid === 'undefined') return;

    const mermaidCodes = container.querySelectorAll('code.language-mermaid');
    mermaidCodes.forEach((code) => {
        const pre = code.parentElement;
        if (pre.classList.contains('mermaid')) return;
        const div = document.createElement('div');
        div.className = 'mermaid';
        div.textContent = code.textContent.trim();
        pre.parentNode.replaceChild(div, pre);
    });

    try {
        mermaid.initialize({ startOnLoad: false, theme: 'default' });
        const mermaidDivs = container.querySelectorAll('.mermaid');
        for (let i = 0; i < mermaidDivs.length; i++) {
            const div = mermaidDivs[i];
            if (!div.querySelector('svg')) {
                const { svg } = await mermaid.render(`mermaid-dyn-${i}-${Date.now()}`, div.textContent);
                div.innerHTML = svg;
            }
        }
    } catch (e) {
        console.error('Mermaid render error:', e);
    }
}

// Copy URL for sharing
function copyUrl() {
    copyToClipboard(window.location.href, 'Link copied to clipboard!');
}

// ====================================================================
// 7. Timezone & Schedule-based Activity State
// ====================================================================
function parseTimeToMinutes(timeStr) {
    if (!timeStr) return 0;
    const parts = timeStr.split(':');
    return parseInt(parts[0], 10) * 60 + parseInt(parts[1] || 0, 10);
}

function updateTimezone() {
    const tzElement = document.getElementById('timezoneText');
    const liveStatusText = document.getElementById('liveStatusText');
    const mobileLiveStatus = document.getElementById('mobileLiveStatusText');

    if (!tzElement) return;

    try {
        const targetTimezone = tzElement.dataset.timezone || 'Asia/Manila';
        const now = new Date();

        // Target timezone time string (e.g. 5:15 PM)
        const targetFormatter = new Intl.DateTimeFormat('en-US', {
            timeZone: targetTimezone,
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
        const targetTimeStr = targetFormatter.format(now);

        // Get 24-hr hour and minute in target timezone
        const hour24Str = new Intl.DateTimeFormat('en-US', {
            timeZone: targetTimezone,
            hour: 'numeric',
            hour12: false
        }).format(now);
        const minuteStr = new Intl.DateTimeFormat('en-US', {
            timeZone: targetTimezone,
            minute: 'numeric'
        }).format(now);

        const currentMinutes = parseInt(hour24Str, 10) * 60 + parseInt(minuteStr, 10);

        // Read schedule if available
        let schedule = [];
        if (tzElement.dataset.schedule) {
            try {
                schedule = JSON.parse(tzElement.dataset.schedule);
            } catch (e) {
                console.warn('Could not parse schedule JSON', e);
            }
        }

        let currentActivity = null;
        if (schedule && schedule.length > 0) {
            for (const slot of schedule) {
                const startMin = parseTimeToMinutes(slot.start);
                const endMin = parseTimeToMinutes(slot.end);

                if (startMin > endMin) {
                    // Spans midnight (e.g., 22:00 to 05:00)
                    if (currentMinutes >= startMin || currentMinutes < endMin) {
                        currentActivity = slot;
                        break;
                    }
                } else {
                    if (currentMinutes >= startMin && currentMinutes < endMin) {
                        currentActivity = slot;
                        break;
                    }
                }
            }
        }

        if (currentActivity) {
            const statusLabel = `${currentActivity.emoji} ${currentActivity.status}`;
            tzElement.innerHTML = `<span>${targetTimeStr}</span> <small class="tz-badge type-${currentActivity.type || 'working'}">${statusLabel}</small>`;
        } else {
            const isWorkingHours = parseInt(hour24Str, 10) >= 9 && parseInt(hour24Str, 10) < 18;
            const statusIndicator = isWorkingHours ? '🟢 Working' : '🌙 Off-hours';
            tzElement.innerHTML = `<span>${targetTimeStr}</span> <small class="tz-badge">${statusIndicator}</small>`;
        }
    } catch (e) {
        console.warn('Timezone calculation failed:', e);
    }
}

// ====================================================================
// 8. Mobile Sidebar Controls
// ====================================================================
function toggleMobileSidebar(side) {
    const leftCol = document.querySelector('.column-1');
    const rightCol = document.querySelector('.column-3');
    const overlay = document.getElementById('mobileOverlay');

    if (side === 'left') {
        if (rightCol) rightCol.classList.remove('mobile-active');
        if (leftCol) leftCol.classList.toggle('mobile-active');
    } else if (side === 'right') {
        if (leftCol) leftCol.classList.remove('mobile-active');
        if (rightCol) rightCol.classList.toggle('mobile-active');
    }

    const anyActive = (leftCol && leftCol.classList.contains('mobile-active')) ||
                      (rightCol && rightCol.classList.contains('mobile-active'));

    if (overlay) {
        if (anyActive) {
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        } else {
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
}

function closeAllMobileSidebars() {
    const leftCol = document.querySelector('.column-1');
    const rightCol = document.querySelector('.column-3');
    const overlay = document.getElementById('mobileOverlay');

    if (leftCol) leftCol.classList.remove('mobile-active');
    if (rightCol) rightCol.classList.remove('mobile-active');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// ====================================================================
// 9. Contact Form Helper
// ====================================================================
function handleSubjectChange() {
    const select = document.getElementById('contactSubjectSelect');
    const customWrapper = document.querySelector('.subject-custom-wrapper');
    if (!select || !customWrapper) return;

    if (select.value === 'other') {
        customWrapper.classList.add('visible');
        const customInput = document.getElementById('contactSubject');
        if (customInput) customInput.focus();
    } else {
        customWrapper.classList.remove('visible');
    }
}

// ====================================================================
// 10. Scroll-to-Top Management
// ====================================================================
function scrollToTop() {
    const mainContent = document.getElementById('mainContent');
    if (mainContent && mainContent.scrollHeight > mainContent.clientHeight) {
        mainContent.scrollTo({ top: 0, behavior: 'smooth' });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleScrollEvents() {
    const btn = document.getElementById('scrollToTopBtn');
    if (!btn) return;

    const mainContent = document.getElementById('mainContent');
    const mainScroll = mainContent ? mainContent.scrollTop : 0;
    const windowScroll = window.scrollY || document.documentElement.scrollTop;

    if (mainScroll > 300 || windowScroll > 300) {
        btn.classList.add('visible');
    } else {
        btn.classList.remove('visible');
    }
}

// ====================================================================
// 11. Client-Side Resume PDF Generator
// ====================================================================
function loadScript(src) {
    return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
            resolve();
            return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
        document.head.appendChild(script);
    });
}

async function downloadResumePDF() {
    ToastManager.show('Preparing PDF generator...', 'info', 2000);

    // Dynamically load html2pdf if not present
    if (typeof html2pdf === 'undefined') {
        try {
            await loadScript('https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js');
        } catch (err) {
            console.warn('html2pdf failed to load, falling back to print dialog', err);
            ToastManager.show('Opening print dialog...', 'info', 1500);
            window.print();
            return;
        }
    }

    const resumeSection = document.getElementById('resumeSection');
    if (!resumeSection) {
        window.print();
        return;
    }

    // Build dedicated clean print container
    const printWrapper = document.createElement('div');
    printWrapper.className = 'resume-pdf-container';
    printWrapper.innerHTML = resumeSection.innerHTML;

    // Remove top navigation bar from PDF output
    const topNav = printWrapper.querySelector('.resume-top-nav');
    if (topNav) topNav.remove();

    // Inline print styling for crisp vector/raster rendering
    printWrapper.style.padding = '24px 32px';
    printWrapper.style.backgroundColor = '#ffffff';
    printWrapper.style.color = '#0f172a';
    printWrapper.style.fontFamily = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";
    printWrapper.style.width = '800px';
    printWrapper.style.boxSizing = 'border-box';

    // Style elements for clean printable contrast
    printWrapper.querySelectorAll('h1, h2, h3, h4, strong').forEach(el => {
        el.style.color = '#0f172a';
    });
    printWrapper.querySelectorAll('.resume-name').forEach(el => {
        el.style.color = '#000000';
        el.style.fontSize = '24px';
        el.style.fontWeight = '800';
    });
    printWrapper.querySelectorAll('.resume-title').forEach(el => {
        el.style.color = '#0284c7';
        el.style.fontWeight = '600';
    });
    printWrapper.querySelectorAll('.resume-period, .resume-contact, .resume-company').forEach(el => {
        el.style.color = '#475569';
    });
    printWrapper.querySelectorAll('.resume-tag').forEach(el => {
        el.style.border = '1px solid #cbd5e1';
        el.style.backgroundColor = '#f1f5f9';
        el.style.color = '#334155';
        el.style.padding = '2px 6px';
        el.style.borderRadius = '3px';
    });

    const opt = {
        margin: [10, 12, 10, 12],
        filename: 'John_Nichols_Ranara_Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, logging: false },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    ToastManager.show('Generating PDF file...', 'info', 2000);

    try {
        await html2pdf().set(opt).from(printWrapper).save();
        ToastManager.show('Resume PDF downloaded!', 'success', 3000);
    } catch (e) {
        console.error('PDF generation failed:', e);
        ToastManager.show('Opening print dialog...', 'info', 2000);
        window.print();
    }
}

// ====================================================================
// 12. App Initialization
// ====================================================================
document.addEventListener('DOMContentLoaded', () => {
    ThemeManager.init();
    ProjectFilter.init();
    AppRouter.init();
    updateTimezone();
    setInterval(updateTimezone, 30000); // Check every 30s

    window.addEventListener('scroll', handleScrollEvents, { passive: true });
    const mainContent = document.getElementById('mainContent');
    if (mainContent) {
        mainContent.addEventListener('scroll', handleScrollEvents, { passive: true });
    }

    if (typeof mermaid !== 'undefined') {
        mermaid.initialize({ startOnLoad: true, theme: 'default' });
    }
});
