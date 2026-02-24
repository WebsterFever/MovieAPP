const moviesContainer = document.getElementById("moviesContainer");


const API_URL = 'http://localhost:3000'; 

const renderCards = (movies) => {
  if (!moviesContainer) {
    console.error("Movies container not found!");
    return;
  }
  
  moviesContainer.innerHTML = '';
  
  movies.forEach((movie) => {
    const card = document.createElement("div");
    card.classList.add("movie-card");
    card.setAttribute("data-id", movie._id); 

    const poster = document.createElement("img");
    poster.classList.add("card-image");
    poster.src = movie.poster;
    poster.alt = movie.title;
    poster.onerror = () => {
      poster.src = 'https://via.placeholder.com/300x450?text=No+Poster';
    };

    const title = document.createElement("h3");
    title.classList.add("movie-title");
    title.textContent = movie.title;

    const year = document.createElement("p");
    year.classList.add("card-text");
    year.textContent = movie.year;

    const director = document.createElement("p");
    director.classList.add("card-text");
    director.innerHTML = `<strong>Director:</strong> ${movie.director}`;

    const duration = document.createElement("p");
    duration.classList.add("card-text");
    duration.innerHTML = `<strong>Duration:</strong> ${movie.duration}`;

    const genre = document.createElement("p");
    genre.classList.add("card-text");
    genre.innerHTML = `<strong>Genre:</strong> ${movie.genre.join(", ")}`;

    const rate = document.createElement("p");
    rate.classList.add("movie-rate");
    rate.textContent = `⭐ ${movie.rate}`;

 
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = "🗑️ Delete";
    deleteBtn.addEventListener("click", () => deleteMovie(movie._id, card));

  
    card.appendChild(poster);
    card.appendChild(title);
    card.appendChild(year);
    card.appendChild(director);
    card.appendChild(duration);
    card.appendChild(genre);
    card.appendChild(rate);
    card.appendChild(deleteBtn);

    moviesContainer.appendChild(card);
  });
};


const deleteMovie = async (movieId, cardElement) => {
  if (!confirm("Are you sure you want to delete this movie?")) return;
  
  try {
   
    const response = await fetch(`${API_URL}/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Failed to delete movie (Status: ${response.status})`);
    }
    
    cardElement.style.transition = 'opacity 0.3s ease';
    cardElement.style.opacity = '0';
    
    setTimeout(() => {
      cardElement.remove();
      
      if (moviesContainer.children.length === 0) {
        const emptyMessage = document.createElement('p');
        emptyMessage.classList.add('text-center', 'text-muted', 'mt-4');
        emptyMessage.textContent = 'No movies yet. Add your first movie!';
        moviesContainer.appendChild(emptyMessage);
      }
    }, 300);
    
    showNotification('Movie deleted successfully', 'success');
    
  } catch (error) {
    console.error('Error deleting movie:', error);
    showNotification(error.message || 'Error deleting movie', 'error');
  }
};


const showNotification = (message, type) => {

  const existingNotifications = document.querySelectorAll('.notification');
  existingNotifications.forEach(notif => notif.remove());
  
  const notification = document.createElement('div');
  notification.classList.add('notification', type);
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 12px 24px;
    border-radius: 8px;
    color: white;
    background-color: ${type === 'success' ? '#28a745' : '#dc3545'};
    z-index: 9999;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    font-weight: 500;
    animation: slideIn 0.3s ease;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
};


const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

module.exports = renderCards;