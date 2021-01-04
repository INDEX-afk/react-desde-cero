import "./styles/styles.scss"
import React from 'react';
import Curso from './Curso'

const cursos = [
  {
    "tittle" : "React desde cero",
    "image" : "https://miro.medium.com/max/3440/1*i_Vj3gs7QO9fjcxELK2c2g.png",
    "price": 30,
    "profesor": "Alvaro manuel"
  }, {
    "tittle" : "HTML desde cero",
    "image" : "https://www.loopeando.com/wp-content/uploads/2016/11/html5.jpg",
    "price": 20,
    "profesor": "Javier Gomez"
  }, {
    "tittle" : "Java desde cero",
    "image" : "https://www.profesionalreview.com/wp-content/uploads/2018/03/Java-1280x720.jpg",
    "price": 10,
    "profesor": "Felipe Carvajal"
  }, {
    "tittle" : "Mongo desde cero",
    "image" : "https://hugorocaproyectos.js.org/images/shared/nodejs-mongodb.jpg",
    "price": 50,
    "profesor": "Josue Antonio"
  }
]

const App = () => (
  <>
  <div className="main-banner img-container l-section" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img className="main-banner__img" alt="banner" src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" />
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">Aprendiedo cursos</p>
          <p> Vamos es para arriba</p>
          <a href="https://ed.team" className="button">OK</a>
        </div>
      </div>
    </div>
</div>

<div className="ed-grid m-grid-3">
  {
    cursos.map( c => <Curso tittle={c.tittle} image={c.image} price={c.price} profesor={c.profesor} /> )
  }
</div>
</>
)

export default App;


//Reglas JSX
//1: toda etiqueta debe cerrarse
//2: los componentes deben devolver un solo elemento padre
// 3: Apoyarse de los fragments cuando necesito devolver 2 elementos
// 4: Fragment => <> hijos </>
// 5: img siempre se cierra
// 6: class => className
// 7: for => htmlFor