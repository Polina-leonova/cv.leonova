import React from 'react';

const Projects = () => {
    return (
      <>
        <h1 className ="project-title">Мои работы</h1>
        <div className="image-container">
          <div className="image-box">
            <a className="work-link" href="https://polina-leonova.github.io/land.github.io/">
              <img src="/photo1718997693.jpeg" alt="Лендинг" />
              <h3>Лендинг</h3>
            </a>
          </div>
          <div className="image-box">
            <a className="work-link" href="https://polina-leonova.github.io/galeria.github.io/">
              <img src="/photo1718997693 (1).jpeg" alt="Галерея" />
              <h3>Галерея</h3>
            </a>
          </div>
          <div className="image-box">
            <a className="work-link" href="https://polina-leonova.github.io/kventor.github.io/">
              <img src="/photo1718998615 (1).jpeg" alt="Квентор" />
              <h3>Квентор</h3>
            </a>
          </div>
          <div className="image-box">
            <a className="work-link" href="https://polina-leonova.github.io/luna.github.io/">
              <img src="/photo1718998615.jpeg" alt="Лунный сайт" />
              <h3>Лунный сайт</h3>
            </a>
          </div>
        </div>
      </>
    );
};

export default Projects;