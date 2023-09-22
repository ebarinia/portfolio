import './Portfolio.css'

const Portfolio = () => {
    return ( 
        <ul class="list-unstyled container">
            <li className='projects'>
            <img class="img-thumbnail" src={require("../../images/temp.jpg")} alt="Generic placeholder image"></img>
            <div>
            <h5>Item Explorer</h5>
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
            </div>
            </li>

            <li className='projects'>
            <img class="img-thumbnail" src={require("../../images/temp.jpg")} alt="Generic placeholder image"></img>
            <div>
            <h5>IMBd</h5>
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
            </div>
            </li>

            <li className='projects'>
            <img class="img-thumbnail" src={require("../../images/temp.jpg")} alt="Generic placeholder image"></img>
            <div>
            <h5>e-Commerce</h5>
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
            </div>
            </li>
        </ul>
        );
}
 
export default Portfolio;