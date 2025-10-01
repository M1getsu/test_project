// AniChrono - Enhanced JavaScript файл
class AniChrono {
    constructor() {
        this.animeData = this.generateAnimeData();
        this.currentPage = window.location.pathname.split('/').pop() || 'index.html';
        this.userData = this.loadUserData();
        this.init();
    }

    init() {
        this.createAnimatedBackground();
        this.initNavigation();
        this.initPageSpecificFeatures();
        this.initScrollAnimations();
        this.initInteractiveElements();
    }

    generateAnimeData() {
        return [
            {
                id: 1,
                title: "Attack on Titan",
                genre: ["Action", "Drama", "Fantasy"],
                year: 2013,
                rating: 9.1,
                episodes: 75,
                status: "Completed",
                description: "В мире, где человечество находится на грани вымирания из-за гигантских человекоподобных существ - титанов, молодой солдат Эрен Йегер клянется уничтожить всех титанов после того, как они разрушают его родной город и убивают его мать.",
                image: "resources/anime-attack-titan.png",
                trailer: "https://example.com/trailer1",
                popularity: 95
            },
            {
                id: 2,
                title: "Demon Slayer",
                genre: ["Action", "Fantasy", "Adventure"],
                year: 2019,
                rating: 8.7,
                episodes: 44,
                status: "Ongoing",
                description: "История о Танджиро Камадо, мальчике, который становится демоноборцем после того, как его семья была убита демонами, а сестра была превращена в демона.",
                image: "resources/anime-demon-slayer.png",
                trailer: "https://example.com/trailer2",
                popularity: 92
            },
            {
                id: 3,
                title: "My Hero Academia",
                genre: ["Action", "Comedy", "School"],
                year: 2016,
                rating: 8.5,
                episodes: 138,
                status: "Ongoing",
                description: "В мире, где 80% населения имеют сверхспособности, молодой Идзуку Мидория мечтает стать профессиональным героем, несмотря на то, что он родился без способностей.",
                image: "resources/anime-hero-academia.png",
                trailer: "https://example.com/trailer3",
                popularity: 88
            },
            {
                id: 4,
                title: "One Piece",
                genre: ["Adventure", "Action", "Comedy"],
                year: 1999,
                rating: 9.0,
                episodes: 1100,
                status: "Ongoing",
                description: "История о пиратах, следящих за своей мечтой. Монки Д. Луффи собирает команду и отправляется в плавание, чтобы найти легендарный сокровище - One Piece.",
                image: "resources/anime-ocean-adventure.png",
                trailer: "https://example.com/trailer4",
                popularity: 94
            },
            {
                id: 5,
                title: "Jujutsu Kaisen",
                genre: ["Action", "Supernatural", "Horror"],
                year: 2020,
                rating: 8.8,
                episodes: 47,
                status: "Ongoing",
                description: "Юдзи Итадори становится носителем древнего проклятия, чтобы спасти других. Теперь он должен научиться контролировать эту силу и сражаться с другими проклятиями.",
                image: "resources/anime-jujutsu-kaisen.png",
                trailer: "https://example.com/trailer5",
                popularity: 90
            },
            {
                id: 6,
                title: "Chainsaw Man",
                genre: ["Action", "Horror", "Supernatural"],
                year: 2022,
                rating: 8.6,
                episodes: 12,
                status: "Completed",
                description: "Дэнджи - молодой охотник за дьяволами, который после смерти заключает сделку с его питомцем-цепнопсом Поучи и становится Человеком-Бензопилой.",
                image: "https://kimi-web-img.moonshot.cn/img/coolvibe.com/80e9ee6aa0ffec775d35956cddc3597bf422ce27.jpg",
                trailer: "https://example.com/trailer6",
                popularity: 87
            },
            {
                id: 7,
                title: "Spy x Family",
                genre: ["Comedy", "Action", "Slice of Life"],
                year: 2022,
                rating: 8.4,
                episodes: 37,
                status: "Ongoing",
                description: "Шпион Ллойд Форджер создает фиктивную семью для секретной миссии, не зная, что его 'дочь' - телепат, а 'жена' - наемный убийца.",
                image: "https://kimi-web-img.moonshot.cn/img/i.pinimg.com/25e39c5ed764e05b64af110946785ca3b43c6695.jpg",
                trailer: "https://example.com/trailer7",
                popularity: 85
            },
            {
                id: 8,
                title: "Death Note",
                genre: ["Supernatural", "Thriller", "Mystery"],
                year: 2006,
                rating: 9.0,
                episodes: 37,
                status: "Completed",
                description: "Студент Лайт Ягами находит тетрадь смерти, которая дает ему возможность убивать людей, просто записывая их имена.",
                image: "https://kimi-web-img.moonshot.cn/img/static2.cbrimages.com/5f8b1b7b3e8c4b0b8d8e9f0a1b2c3d4e5f6789ab.jpg",
                trailer: "https://example.com/trailer8",
                popularity: 96
            },
            {
                id: 9,
                title: "Fullmetal Alchemist: Brotherhood",
                genre: ["Action", "Adventure", "Drama"],
                year: 2009,
                rating: 9.2,
                episodes: 64,
                status: "Completed",
                description: "Братья Эдвард и Алфонс Элрик используют алхимию, чтобы вернуть свои тела после неудачной попытки воскресить свою мать.",
                image: "https://kimi-web-img.moonshot.cn/img/static3.cbrimages.com/6f9c0b8b4d9e5c1b9d9f0a2b3c4d5e6f789abcd.jpg",
                trailer: "https://example.com/trailer9",
                popularity: 93
            },
            {
                id: 10,
                title: "Your Name",
                genre: ["Romance", "Drama", "Supernatural"],
                year: 2016,
                rating: 8.9,
                episodes: 1,
                status: "Movie",
                description: "Два подростка обнаруживают, что они случайно меняются телами, и должны работать вместе, чтобы предотвратить катастрофу.",
                image: "https://kimi-web-img.moonshot.cn/img/static4.cbrimages.com/7g0d1c9c5e0f6d2b0e0f1a3b4c5d6e7f890abcde.jpg",
                trailer: "https://example.com/trailer10",
                popularity: 91
            }
        ];
    }

    loadUserData() {
        const defaultData = {
            favorites: [],
            watchHistory: [],
            ratings: {},
            preferences: {
                genres: [],
                quality: '1080p',
                subtitles: true
            }
        };
        
        const saved = localStorage.getItem('aniChronoUserData');
        return saved ? { ...defaultData, ...JSON.parse(saved) } : defaultData;
    }

    saveUserData() {
        localStorage.setItem('aniChronoUserData', JSON.stringify(this.userData));
    }

    createAnimatedBackground() {
        // This is handled by P5.js in the HTML file
        console.log('Animated background initialized');
    }

    initNavigation() {
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Active nav link highlighting
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('.nav-link').forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.style.color = 'var(--accent-coral)';
                link.style.textShadow = '0 0 10px var(--accent-coral)';
            }
        });
    }

    initPageSpecificFeatures() {
        switch(this.currentPage) {
            case 'index.html':
            case '':
                this.initHomePage();
                break;
            case 'catalog.html':
                this.initCatalogPage();
                break;
            case 'watch.html':
                this.initWatchPage();
                break;
            case 'profile.html':
                this.initProfilePage();
                break;
        }
    }

    initHomePage() {
        this.populatePopularCarousel();
        this.populateNewReleases();
        this.initSearchFunctionality();
    }

    populatePopularCarousel() {
        const container = document.getElementById('popular-anime-list');
        if (!container) return;

        const popularAnime = this.animeData
            .sort((a, b) => b.popularity - a.popularity)
            .slice(0, 8);

        container.innerHTML = popularAnime.map(anime => this.createAnimeCard(anime, true)).join('');

        // Initialize Splide carousel
        if (typeof Splide !== 'undefined') {
            new Splide('#popular-carousel', {
                type: 'loop',
                perPage: 4,
                perMove: 1,
                gap: '1rem',
                autoplay: true,
                interval: 3000,
                breakpoints: {
                    1024: { perPage: 3 },
                    768: { perPage: 2 },
                    480: { perPage: 1 }
                }
            }).mount();
        }
    }

    populateNewReleases() {
        const container = document.getElementById('new-releases');
        if (!container) return;

        const newReleases = this.animeData
            .filter(anime => anime.year >= 2020)
            .sort((a, b) => b.year - a.year)
            .slice(0, 8);

        container.innerHTML = newReleases.map(anime => this.createAnimeCard(anime)).join('');
    }

    createAnimeCard(anime, isCarousel = false) {
        const genres = anime.genre.slice(0, 3).map(genre => 
            `<span class="genre-tag">${genre}</span>`
        ).join('');

        return `
            <li class="splide__slide" data-anime-id="${anime.id}">
                <div class="anime-card" onclick="viewAnimeDetails(${anime.id})">
                    <img src="${anime.image}" alt="${anime.title}" loading="lazy" 
                         onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDMwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjMWExYTJlIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMjAwIiBmaWxsPSIjZmZmZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0Ij7wn5CjPC90ZXh0Pgo8L3N2Zz4='">
                    <div class="anime-info">
                        <h3 class="anime-title">${anime.title}</h3>
                        <div class="anime-meta">
                            <div class="anime-rating">
                                <i class="fas fa-star mr-1"></i>
                                ${anime.rating}
                            </div>
                            <div class="anime-year">${anime.year}</div>
                        </div>
                        <div class="anime-genres">${genres}</div>
                        <button class="watch-btn" onclick="event.stopPropagation(); watchAnime(${anime.id})">
                            <i class="fas fa-play mr-2"></i>Смотреть
                        </button>
                    </div>
                </div>
            </li>
        `;
    }

    initSearchFunctionality() {
        const searchInput = document.getElementById('hero-search');
        const suggestionsContainer = document.getElementById('search-suggestions');
        
        if (!searchInput || !suggestionsContainer) return;

        let searchTimeout;
        
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            const query = e.target.value.trim();
            
            if (query.length < 2) {
                suggestionsContainer.classList.add('hidden');
                return;
            }
            
            searchTimeout = setTimeout(() => {
                this.showSearchSuggestions(query, suggestionsContainer);
            }, 300);
        });

        // Hide suggestions when clicking outside
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !suggestionsContainer.contains(e.target)) {
                suggestionsContainer.classList.add('hidden');
            }
        });
    }

    showSearchSuggestions(query, container) {
        const suggestions = this.animeData.filter(anime => 
            anime.title.toLowerCase().includes(query.toLowerCase()) ||
            anime.genre.some(genre => genre.toLowerCase().includes(query.toLowerCase()))
        ).slice(0, 5);

        if (suggestions.length === 0) {
            container.classList.add('hidden');
            return;
        }

        container.innerHTML = suggestions.map(anime => `
            <div class="p-3 hover:bg-gray-700 cursor-pointer border-b border-gray-600 last:border-b-0" 
                 onclick="selectSuggestion('${anime.title}')">
                <div class="flex items-center">
                    <img src="${anime.image}" alt="${anime.title}" class="w-10 h-10 rounded object-cover mr-3"
                         onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMWExYTJlIi8+Cjx0ZXh0IHg9IjIwIiB5PSIyMCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMCI+8J+QoTwvdGV4dD4KPC9zdmc+'">
                    <div>
                        <div class="text-white font-medium">${anime.title}</div>
                        <div class="text-gray-400 text-sm">${anime.genre.slice(0, 2).join(', ')} • ${anime.year}</div>
                    </div>
                </div>
            </div>
        `).join('');

        container.classList.remove('hidden');
    }

    initCatalogPage() {
        this.populateCatalog();
        this.initFilters();
        this.initCatalogSearch();
    }

    populateCatalog(filters = {}) {
        const container = document.getElementById('catalog-grid');
        if (!container) return;

        let filteredAnime = this.animeData;

        // Apply filters
        if (filters.genre && filters.genre !== 'all') {
            filteredAnime = filteredAnime.filter(anime => 
                anime.genre.includes(filters.genre)
            );
        }

        if (filters.year && filters.year !== 'all') {
            filteredAnime = filteredAnime.filter(anime => 
                anime.year.toString() === filters.year
            );
        }

        if (filters.status && filters.status !== 'all') {
            filteredAnime = filteredAnime.filter(anime => 
                anime.status === filters.status
            );
        }

        if (filters.search) {
            filteredAnime = filteredAnime.filter(anime => 
                anime.title.toLowerCase().includes(filters.search.toLowerCase()) ||
                anime.genre.some(genre => genre.toLowerCase().includes(filters.search.toLowerCase()))
            );
        }

        // Sort by popularity
        filteredAnime.sort((a, b) => b.popularity - a.popularity);

        container.innerHTML = filteredAnime.map(anime => this.createAnimeCard(anime)).join('');
        
        // Update results count
        const resultsCount = document.getElementById('results-count');
        if (resultsCount) {
            resultsCount.textContent = `Найдено: ${filteredAnime.length} аниме`;
        }
    }

    initFilters() {
        const genreFilter = document.getElementById('genre-filter');
        const yearFilter = document.getElementById('year-filter');
        const statusFilter = document.getElementById('status-filter');

        if (genreFilter) {
            genreFilter.addEventListener('change', () => this.applyFilters());
        }
        if (yearFilter) {
            yearFilter.addEventListener('change', () => this.applyFilters());
        }
        if (statusFilter) {
            statusFilter.addEventListener('change', () => this.applyFilters());
        }
    }

    applyFilters() {
        const filters = {
            genre: document.getElementById('genre-filter')?.value || 'all',
            year: document.getElementById('year-filter')?.value || 'all',
            status: document.getElementById('status-filter')?.value || 'all',
            search: document.getElementById('catalog-search')?.value || ''
        };

        this.populateCatalog(filters);
    }

    initCatalogSearch() {
        const searchInput = document.getElementById('catalog-search');
        if (searchInput) {
            let searchTimeout;
            searchInput.addEventListener('input', () => {
                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(() => {
                    this.applyFilters();
                }, 300);
            });
        }
    }

    initWatchPage() {
        this.initVideoPlayer();
        this.loadWatchHistory();
    }

    initVideoPlayer() {
        // Video player functionality would go here
        console.log('Video player initialized');
    }

    initProfilePage() {
        this.displayUserStats();
        this.displayFavorites();
        this.displayWatchHistory();
    }

    displayUserStats() {
        const statsContainer = document.getElementById('user-stats');
        if (!statsContainer) return;

        const stats = {
            totalWatched: this.userData.watchHistory.length,
            favoritesCount: this.userData.favorites.length,
            avgRating: this.calculateAverageRating()
        };

        statsContainer.innerHTML = `
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="stat-card">
                    <div class="stat-number">${stats.totalWatched}</div>
                    <div class="stat-label">Просмотрено</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${stats.favoritesCount}</div>
                    <div class="stat-label">Избранное</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${stats.avgRating}</div>
                    <div class="stat-label">Средняя оценка</div>
                </div>
            </div>
        `;
    }

    calculateAverageRating() {
        const ratings = Object.values(this.userData.ratings);
        if (ratings.length === 0) return '0.0';
        const avg = ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length;
        return avg.toFixed(1);
    }

    initScrollAnimations() {
        // This is handled by CSS and JavaScript in the HTML file
        console.log('Scroll animations initialized');
    }

    initInteractiveElements() {
        // Add hover effects and interactive elements
        this.addHoverEffects();
        this.initTooltips();
    }

    addHoverEffects() {
        // Add 3D hover effects to cards
        document.querySelectorAll('.anime-card').forEach(card => {
            card.addEventListener('mouseenter', function(e) {
                this.style.transform = 'translateY(-10px) rotateY(5deg) rotateX(5deg)';
            });
            
            card.addEventListener('mouseleave', function(e) {
                this.style.transform = 'translateY(0) rotateY(0) rotateX(0)';
            });
        });
    }

    initTooltips() {
        // Add tooltips for better UX
        document.querySelectorAll('[data-tooltip]').forEach(element => {
            element.addEventListener('mouseenter', this.showTooltip);
            element.addEventListener('mouseleave', this.hideTooltip);
        });
    }

    showTooltip(e) {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = e.target.getAttribute('data-tooltip');
        document.body.appendChild(tooltip);
        
        const rect = e.target.getBoundingClientRect();
        tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
        tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
    }

    hideTooltip() {
        const tooltip = document.querySelector('.tooltip');
        if (tooltip) {
            tooltip.remove();
        }
    }

    // Utility functions
    addToFavorites(animeId) {
        if (!this.userData.favorites.includes(animeId)) {
            this.userData.favorites.push(animeId);
            this.saveUserData();
            this.showNotification('Добавлено в избранное!');
        }
    }

    removeFromFavorites(animeId) {
        this.userData.favorites = this.userData.favorites.filter(id => id !== animeId);
        this.saveUserData();
        this.showNotification('Удалено из избранного');
    }

    rateAnime(animeId, rating) {
        this.userData.ratings[animeId] = rating;
        this.saveUserData();
        this.showNotification(`Оценка ${rating} звезд сохранена!`);
    }

    showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// Global functions for HTML onclick handlers
function viewAnimeDetails(animeId) {
    window.location.href = `title-details.html?id=${animeId}`;
}

function watchAnime(animeId) {
    window.location.href = `watch.html?id=${animeId}`;
}

function selectSuggestion(title) {
    const searchInput = document.getElementById('hero-search');
    if (searchInput) {
        searchInput.value = title;
        document.getElementById('search-suggestions').classList.add('hidden');
    }
}

function toggleFavorite(animeId) {
    if (window.aniChrono) {
        const favorites = window.aniChrono.userData.favorites;
        if (favorites.includes(animeId)) {
            window.aniChrono.removeFromFavorites(animeId);
        } else {
            window.aniChrono.addToFavorites(animeId);
        }
        updateFavoriteButton(animeId);
    }
}

function updateFavoriteButton(animeId) {
    const button = document.querySelector(`[data-anime-id="${animeId}"] .favorite-btn`);
    if (button && window.aniChrono) {
        const isFavorite = window.aniChrono.userData.favorites.includes(animeId);
        button.innerHTML = `<i class="fas fa-heart${isFavorite ? '' : '-o'}"></i>`;
        button.classList.toggle('favorited', isFavorite);
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    window.aniChrono = new AniChrono();
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AniChrono;
}