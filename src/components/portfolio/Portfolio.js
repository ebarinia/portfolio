import './Portfolio.css'

const Portfolio = () => {
    return ( 
        <ul class="list-unstyled container portfolio">
            <div className='bg-white rounded-xl mt-10 shadow'>
            <li className='projects'>
            <img class="img-thumbnail" src={require("../../images/item.png")} alt="Generic placeholder"></img>
            <div>
            <h5>Item Explorer</h5>
            <p>This was my first project after finishing the Python course. I have developped a web-application that allows a user to keep track of his inventory. The user is able to add an item, change the quantity of a particular item, and indicate from which supplier it wa purchased from. There is also various visual indications as to when a product is in low stock or sold-out. This project was created entirely with Python and Flask as a framework</p>
            <a className='btn' href='https://github.com/ebarinia/Warehouse_project' target="_blank" rel="noreferrer">View on Github</a>
            </div>
            </li>
            </div>

            <div className='bg-white rounded-xl mt-10 shadow'>
            <li className='projects'>
            <img className="img-thumbnail shadow-xl" src={require("../../images/imbd.png")} alt="Generic placeholder"></img>
            <div>
            <h5>IMBD</h5>
            <p>IMBd was my first React project. I have applied my learning of APIs in order to search for a particular film (from a third-party IMDB API), and add that film to a watchlist. A user can also find more detail about the film by being redirected to the film's IMDB page</p>
            <a className='btn' href='https://github.com/ebarinia/IMBD' target="_blank" rel="noreferrer">View on Github</a>
            </div>
            </li>
            </div>

            <div className='bg-white rounded-xl mt-10 shadow'>
            <li className='projects'>
            <img class="img-thumbnail" src={require("../../images/wash.png")} alt="Generic placeholder"></img>
            <div>
            <h5>Wash.com</h5>
            <p>This project is similar to the one above, I have created an e-Commerce website that display a list of items to the user. The user can then add items to his basket, which also calculate the total amount and return it to the user. Built with React</p>
            <a className='btn' href='https://github.com/ebarinia/e-commerce' target="_blank" rel="noreferrer">View on Github</a>
            </div>
            </li>
            </div>

            <div className='bg-white rounded-xl mt-10 shadow'>
            <li className='projects'>
            <img class="img-thumbnail" src={require("../../images/todo.png")} alt="Generic placeholder"></img>
            <div>
            <h5>Todo list</h5>
            <p>A simple todo-list application to keep track of important things I need to complete before the end of the week. The todos are automatically stored in the user's local storage. Built with React</p>
            <a className='btn' href='https://github.com/ebarinia/todo-list' target="_blank" rel="noreferrer">View on Github</a>
            </div>
            </li>
            </div>

            <div className='bg-white rounded-xl mt-10 shadow'>
            <li className='projects'>
            <img class="img-thumbnail" src={require("../../images/event.png")} alt="Generic placeholder"></img>
            <div>
            <h5>Event Diary</h5>
            <p>A simple todo-list application to keep track of important things I need to complete before the end of the week. The todos are automatically stored in the user's local storage. Built with React</p>
            <a className='btn' href='https://github.com/ebarinia/todo-list' target="_blank" rel="noreferrer">View on Github</a> <a className='btn' href='https://event-diary.vercel.app/' target="_blank" rel="noreferrer">View App</a>
            </div>
            </li>
            </div>
        </ul>
        );
}
 
export default Portfolio;