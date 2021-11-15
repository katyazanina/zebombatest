import {data} from '../data/data';

const init = () => {

    let sortBy = function(field, reverse, primer){

        let key = primer ? 
            function(x) {return primer(x[field])} : 
            function(x) {return x[field]};

        reverse = !reverse ? 1 : -1;

        return function (a, b) {
            return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
        }; 
    };

    const rateData = data.rating;

    const sortRateData = rateData.sort(sortBy('points', true, parseInt));

    class CreatRateLine {
        constructor(i, id, name, lastName, img, points) {
            this.i = i+1;
            this.id = id;
            this.name = name;
            this.lastName = lastName;
            this.img = img;
            this.points = points;
        }

        getFriends(element){
            const friend = data.friends;

            friend.forEach((el)=>{
                if(el.id == this.id){
                    element.classList.add('friend');
                }
            });
        }
        createElement() {
            const container = document.querySelector('.rating__items');
            const line = document.createElement("div");
            line.classList.add('rating__line');  
            container.appendChild(line);
            this.getFriends(line);
            const place = document.createElement("div");
            place.textContent = this.i;
            place.classList.add('rating__place');  
            line.appendChild(place);


            const img = document.createElement("div");
            img.innerHTML = `<img src="${this.img}">`;
            img.classList.add('rating__image');  
            line.appendChild(img);

            const name = document.createElement("div");
            name.textContent = `${this.name} ${this.lastName}`;
            name.classList.add('rating__name');  
            line.appendChild(name);

            const point = document.createElement("div");
            point.textContent = this.points;
            point.classList.add('rating__expir');  
            line.appendChild(point);
            
            // elemwrap.setAttribute('id', `dot-${this.index}`);
            
        }

       
    }

    rateData.forEach((el, i) => {
        let rateLine = new CreatRateLine(i, el.id, el.name, el.lastName, el.img, el.points);
        rateLine.createElement();
    });
 
};

export default {
	init
};