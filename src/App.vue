<!-- src/App.vue -->
<template>
  <div class="app">
    <!-- Header -->
    <header class="header">
      <div class="container">
        <div class="header-content">
          <h1 class="logo">FilmCritique</h1>
          <nav class="nav">
            <ul class="nav-list">
              <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
              <li class="nav-item"><a href="#" class="nav-link">Films</a></li>
              <li class="nav-item"><a href="#" class="nav-link">Reviews</a></li>
              <li class="nav-item"><a href="#" class="nav-link">Account</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="main">
      <div class="container">
        <!-- Homepagina -->
        <div class="home-page">
          <!-- Zoekbalk -->
          <div class="search-wrapper">
            <input type="text" class="search-input" placeholder="Zoek films of reviews...">
            <button class="search-button">
              <i class="search-icon">🔍</i>
            </button>
          </div>

          <!-- Populaire Films Sectie -->
          <section class="section">
            <div class="section-header">
              <h2 class="section-title">Populaire Films</h2>
              <a href="#" class="btn btn-primary">Alle films bekijken</a>
            </div>

            <div class="film-grid">
              <!-- Film Card (herhaald voor elke film) -->
              <div class="film-card">
                <div class="film-poster">
                  <div class="film-poster-placeholder">🎬</div>
                </div>
                <div class="film-details">
                  <h3 class="film-title">Inception</h3>
                  <p class="film-director">Christopher Nolan</p>
                  <p class="film-year">2010</p>
                  <div class="film-rating">
                    <span class="stars">★★★★☆</span>
                    <span class="review-count">42 reviews</span>
                  </div>
                </div>
              </div>

              <!-- Meer filmkaarten hier -->
              <div class="film-card">
                <div class="film-poster">
                  <div class="film-poster-placeholder">🎬</div>
                </div>
                <div class="film-details">
                  <h3 class="film-title">The Shawshank Redemption</h3>
                  <p class="film-director">Frank Darabont</p>
                  <p class="film-year">1994</p>
                  <div class="film-rating">
                    <span class="stars">★★★★★</span>
                    <span class="review-count">128 reviews</span>
                  </div>
                </div>
              </div>

              <div class="film-card">
                <div class="film-poster">
                  <div class="film-poster-placeholder">🎬</div>
                </div>
                <div class="film-details">
                  <h3 class="film-title">Pulp Fiction</h3>
                  <p class="film-director">Quentin Tarantino</p>
                  <p class="film-year">1994</p>
                  <div class="film-rating">
                    <span class="stars">★★★★☆</span>
                    <span class="review-count">87 reviews</span>
                  </div>
                </div>
              </div>

              <div class="film-card">
                <div class="film-poster">
                  <div class="film-poster-placeholder">🎬</div>
                </div>
                <div class="film-details">
                  <h3 class="film-title">The Dark Knight</h3>
                  <p class="film-director">Christopher Nolan</p>
                  <p class="film-year">2008</p>
                  <div class="film-rating">
                    <span class="stars">★★★★☆</span>
                    <span class="review-count">95 reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Recente Reviews Sectie -->
          <section class="section">
            <div class="section-header">
              <h2 class="section-title">Recente Reviews</h2>
            </div>

            <div class="review-grid">
              <!-- Review Card (herhaald voor elke review) -->
              <div class="review-card">
                <h3 class="review-film-title">Inception</h3>
                <p class="review-author">Door: Thomas Janssens</p>
                <div class="review-rating">★★★★☆</div>
                <p class="review-excerpt">Een meesterwerk dat je aan het denken zet...</p>
              </div>

              <div class="review-card">
                <h3 class="review-film-title">The Shawshank Redemption</h3>
                <p class="review-author">Door: Lotte Peeters</p>
                <div class="review-rating">★★★★★</div>
                <p class="review-excerpt">Een tijdloze klassieker die iedereen zou moeten zien...</p>
              </div>

              <div class="review-card">
                <h3 class="review-film-title">Pulp Fiction</h3>
                <p class="review-author">Door: Wouter Maes</p>
                <div class="review-rating">★★★★☆</div>
                <p class="review-excerpt">Vernieuwende stijl en onverwachte verhaallijnen...</p>
              </div>
            </div>
          </section>
        </div>

        <!-- Film Detail Pagina (verborgen, alleen ter referentie) -->
        <div class="film-detail-page" style="display: none;">
          <div class="back-link">
            <a href="#" class="btn-back">← Terug</a>
          </div>

          <div class="film-detail">
            <div class="film-detail-left">
              <div class="film-poster-large">
                <div class="film-poster-placeholder">🎬</div>
              </div>
            </div>

            <div class="film-detail-right">
              <h1 class="film-title-large">Inception</h1>
              <div class="film-info">
                <p class="film-info-item"><strong>Regisseur:</strong> Christopher Nolan</p>
                <p class="film-info-item"><strong>Jaar:</strong> 2010</p>
                <p class="film-info-item"><strong>Genre:</strong> Sci-Fi, Action, Thriller</p>
                <p class="film-info-item"><strong>Duur:</strong> 148 minuten</p>
              </div>

              <div class="film-rating-large">
                <h3 class="rating-title">Gemiddelde beoordeling:</h3>
                <div class="rating-display">
                  <span class="stars-large">★★★★☆</span>
                  <span class="rating-numbers">(4.2/5 - 42 reviews)</span>
                </div>
              </div>

              <div class="film-description">
                <h3 class="description-title">Beschrijving:</h3>
                <p class="description-text">Dom Cobb is een getalenteerde dief, de absolute beste in de gevaarlijke kunst van het 'extractie': het stelen van waardevolle geheimen uit de diepten van het onderbewustzijn tijdens de droomstaat, wanneer de geest het meest kwetsbaar is.</p>
              </div>
            </div>
          </div>

          <div class="reviews-section">
            <div class="reviews-header">
              <h2 class="reviews-title">Reviews (42)</h2>
              <a href="#" class="btn btn-primary">Schrijf Review</a>
            </div>

            <div class="reviews-list">
              <div class="review-item">
                <div class="review-header">
                  <span class="review-author">Thomas Janssens</span>
                  <span class="review-date">12 maart 2025</span>
                </div>
                <div class="review-rating">★★★★☆</div>
                <p class="review-content">Een meesterwerk dat je aan het denken zet. Nolan heeft weer een meesterwerk afgeleverd.</p>
              </div>

              <div class="review-item">
                <div class="review-header">
                  <span class="review-author">Lotte Peeters</span>
                  <span class="review-date">28 februari 2025</span>
                </div>
                <div class="review-rating">★★★★★</div>
                <p class="review-content">Verbluffende visuele effecten en een ingenieus verhaal. De beste film die ik in jaren heb gezien!</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Schrijf Review Pagina (verborgen, alleen ter referentie) -->
        <div class="add-review-page" style="display: none;">
          <div class="review-form-container">
            <h1 class="form-title">Schrijf een review</h1>
            
            <form class="review-form">
              <!-- Film selectie -->
              <div class="form-group">
                <label for="film" class="form-label">Film:</label>
                <div class="film-select">
                  <select id="film" class="form-select">
                    <option value="" disabled selected>Selecteer een film</option>
                    <option value="1">Inception (2010)</option>
                    <option value="2">The Shawshank Redemption (1994)</option>
                    <option value="3">Pulp Fiction (1994)</option>
                    <option value="4">The Dark Knight (2008)</option>
                  </select>
                </div>
              </div>

              <!-- Rating selectie -->
              <div class="form-group">
                <label class="form-label">Jouw beoordeling:</label>
                <div class="rating-selector">
                  <div class="stars-input">
                    <span class="star">★</span>
                    <span class="star">★</span>
                    <span class="star">★</span>
                    <span class="star">★</span>
                    <span class="star">★</span>
                  </div>
                </div>
              </div>

              <!-- Review titel -->
              <div class="form-group">
                <label for="title" class="form-label">Titel van je review:</label>
                <input type="text" id="title" class="form-input" placeholder="Geef je review een pakkende titel...">
              </div>

              <!-- Review content -->
              <div class="form-group">
                <label for="content" class="form-label">Jouw review:</label>
                <textarea id="content" class="form-textarea" placeholder="Deel je mening over de film..." rows="6"></textarea>
              </div>

              <!-- Form buttons -->
              <div class="form-buttons">
                <button type="button" class="btn btn-secondary">Annuleren</button>
                <button type="submit" class="btn btn-primary">Opslaan</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <p class="copyright">© 2025 FilmCritique - Web Advanced Project</p>
      </div>
    </footer>
  </div>
</template>

<style>
/* Reset en algemene stijl */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #1e293b;
  background-color: #f5f5f7;
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Header Stijlen */
.header {
  background-color: #1e293b;
  color: white;
  padding: 20px 0;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

.nav-list {
  display: flex;
  list-style: none;
}

.nav-item {
  margin-left: 30px;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #3b82f6;
}

/* Hoofdcontent Stijlen */
.main {
  padding: 40px 0;
}

.home-page, .film-detail-page, .add-review-page {
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

/* Zoekbalk */
.search-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}

.search-input {
  width: 400px;
  padding: 12px 20px;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  font-size: 14px;
  background-color: #f1f5f9;
}

.search-button {
  background: none;
  border: none;
  margin-left: -40px;
  cursor: pointer;
}

/* Sectie Stijlen */
.section {
  margin-bottom: 40px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.section-title {
  font-size: 22px;
  font-weight: bold;
}

.btn {
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.btn-primary {
  background-color: #3b82f6;
  color: white;
}

.btn-primary:hover {
  background-color: #2563eb;
}

.btn-secondary {
  background-color: #f1f5f9;
  color: #1e293b;
  border: 1px solid #cbd5e1;
}

.btn-secondary:hover {
  background-color: #e2e8f0;
}

/* Film Grid en Kaarten */
.film-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.film-card {
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.film-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.film-poster {
  height: 160px;
  background-color: #334155;
  display: flex;
  align-items: center;
  justify-content: center;
}

.film-poster-placeholder {
  font-size: 48px;
  color: #64748b;
}

.film-details {
  padding: 15px;
  text-align: center;
}

.film-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
}

.film-director, .film-year {
  font-size: 14px;
  color: #64748b;
  margin-bottom: 5px;
}

.film-rating {
  margin-top: 10px;
}

.stars, .review-rating {
  color: #eab308;
  font-size: 16px;
}

.review-count {
  display: block;
  font-size: 12px;
  color: #64748b;
  margin-top: 5px;
}

/* Review Grid en Kaarten */
.review-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.review-card {
  background-color: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 20px;
  transition: box-shadow 0.3s ease;
}

.review-card:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.review-film-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
}

.review-author {
  font-size: 14px;
  color: #64748b;
  margin-bottom: 10px;
}

.review-excerpt {
  font-size: 12px;
  color: #64748b;
}

/* Film Detail Pagina */
.back-link {
  margin-bottom: 20px;
}

.btn-back {
  display: inline-block;
  padding: 8px 15px;
  background-color: #f1f5f9;
  border-radius: 15px;
  color: #64748b;
  text-decoration: none;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.btn-back:hover {
  background-color: #e2e8f0;
}

.film-detail {
  display: flex;
  margin-bottom: 30px;
}

.film-detail-left {
  flex: 0 0 300px;
  margin-right: 30px;
}

.film-detail-right {
  flex: 1;
}

.film-poster-large {
  height: 400px;
  background-color: #334155;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.film-title-large {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 15px;
}

.film-info {
  margin-bottom: 20px;
}

.film-info-item {
  font-size: 16px;
  color: #64748b;
  margin-bottom: 10px;
}

.film-rating-large {
  margin-bottom: 20px;
}

.rating-title, .description-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.rating-display {
  display: flex;
  align-items: center;
}

.stars-large {
  color: #eab308;
  font-size: 22px;
  margin-right: 10px;
}

.rating-numbers {
  font-size: 18px;
  color: #64748b;
}

.description-text {
  font-size: 14px;
  line-height: 1.6;
  color: #64748b;
}

.reviews-section {
  margin-top: 30px;
}

.reviews-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.reviews-title {
  font-size: 22px;
  font-weight: bold;
}

.reviews-list {
  margin-bottom: 20px;
}

.review-item {
  background-color: #f1f5f9;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 15px;
}

.review-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.review-author {
  font-size: 16px;
  font-weight: bold;
  color: #1e293b;
}

.review-date {
  font-size: 14px;
  color: #64748b;
}

.review-content {
  font-size: 14px;
  line-height: 1.5;
  color: #334155;
}

/* Review Formulier */
.review-form-container {
  max-width: 700px;
  margin: 0 auto;
}

.form-title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #e2e8f0;
  border-radius: 5px;
  font-size: 14px;
  background-color: #f8fafc;
}

.stars-input {
  display: flex;
  margin-top: 5px;
}

.star {
  font-size: 24px;
  color: #cbd5e1;
  cursor: pointer;
  transition: color 0.3s ease;
}

.star:hover,
.star.selected {
  color: #eab308;
}

.form-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

/* Footer Stijlen */
.footer {
  background-color: #1e293b;
  color: white;
  padding: 20px 0;
  text-align: center;
  font-size: 14px;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .film-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .film-grid, .review-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .search-input {
    width: 100%;
  }
  
  .film-detail {
    flex-direction: column;
  }
  
  .film-detail-left {
    margin-right: 0;
    margin-bottom: 20px;
  }
}

@media (max-width: 480px) {
  .film-grid, .review-grid {
    grid-template-columns: 1fr;
  }
  
  .nav-list {
    display: none; /* In een echte app zou je hier een mobiel menu toevoegen */
  }
  
  .form-buttons {
    flex-direction: column;
  }
  
  .btn {
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>