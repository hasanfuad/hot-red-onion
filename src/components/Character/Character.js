import React from 'react';
import '.Character.css';
import image1 from '../../Resources/Image/adult-blur-blurred-background-687824.png';
import avatar1 from '../../Resources/ICON/Group 204.png';
import image2 from '../../Resources/Image/chef-cook-food-33614.png';
import avatar2 from '../../Resources/ICON/Group 1133.png';
import image3 from '../../Resources/Image/architecture-building-city-2047397.png';
import avatar3 from '../../Resources/ICON/Group 245.png';


const Character = () => {
    return (
        <div className="container text-left character-block">
            <h2>Review Us</h2>
            <p>write something.</p>
            <div className="row">
                <div className="col-md-4">
                    <div className="card" style={{width:'14rem'}}></div>
                    <img src={image1} className="card-img-top" alt=""/>
                    <div className="card-body row">
                        <div className="col-3">
                            <img src={avatar1} alt=""/>
                        </div>
                        <div className="col-9">
                            <h5>Quick Delivery</h5>
                            <p className="card-text"><small>write something </small></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card" style={{width: '14rem'}}>
                    <img src={image2} className="card-img-top" alt=""/>
                <div className="card-body row"></div>
                <div className="col-3">
                    <img src={avatar2}  alt= ""/>
                </div>
                <div className="col-9">
                    <h5>Top Reviewer</h5>
                    <p className="card-text"><small>write something on character className</small></p>
                
                
            
            
        
        <div className="col-md-4">
            <div className="card" style={{width: '14rem'}}>
                <img src={avatar3} alt=""/>
            </div>
            <div className="col-9">
                <h6>Home Service</h6>
                <p className="card-text"><small>write something on homeservice</small></p>
              
                </div>
            </div>
            </div>
            </div>
            </div>
            </div>

    );
};

export default Character;