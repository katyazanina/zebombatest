'use strict';

const init = () => {
    const arrDot = [
        {
            x0: 427,
            y0: 493,
            path: [
                {
                    x: 427,
                    y: 493
                },
            ],
            red: false,
            start: true,
            end: false,
        },
        {
            x0: 341,
            y0:468,
            path: [
                {
                    x: 381,
                    y:458
                },
                {
                    x: 341,
                    y:468
                },
                
            ],
            red: false,
            start: false,
            end: false,
        },
        {
            x0: 267,
            y0: 511,
            path: [
                {
                    x: 267,
                    y: 511
                },
            ],
            red: false,
            start: false,
            end: false,
        },
        {
            x0: 180,
            y0: 530,
            path: [
                {
                    x: 180,
                    y: 530
                },
            ],
            red: false,
            start: false,
            end: false,
        },
        {
            x0: 101,
            y0: 502,
            path: [
                {
                    x: 101,
                    y: 502
                },
            ],
            red: false,
            start: false,
            end: false,
        },
         {
            x0: 111,
            y0: 436,
            path: [
                {
                    x: 75,
                    y: 471
                },
                {
                    x: 111,
                    y: 436
                },
            ],
            red: true,
            start: false,
            end: false,
        },
        {
            x0: 133,
            y0: 382,
            path: [
                {
                    x: 101,
                    y: 414
                },
                {
                    x: 133,
                    y: 382
                },
                
            ],
            red: false,
            start: false,
            end: false,
        },
        {
            x0: 205,
            y0: 345,
            path: [
                {
                    x: 205,
                    y: 345
                },
                
                
            ],
            red: false,
            start: false,
            end: false,
        },
        {
            x0: 167,
            y0: 274,
            path: [
                {
                    x: 230,
                    y: 321
                },
                {
                    x: 167,
                    y: 274
                },
                
                
            ],
            red: false,
            start: false,
            end: false,
        },
        {
            x0: 129,
            y0: 221,
            path: [
                {
                    x: 113,
                    y: 234
                },
                {
                    x: 129,
                    y: 221
                },
                
                
            ],
            red: false,
            start: false,
            end: false,
        },
          {
            x0: 189,
            y0: 189,
            path: [
                {
                    x: 153,
                    y: 208
                },
                {
                    x: 148,
                    y: 182
                },
                {
                    x: 167,
                    y: 172
                },
                {
                    x: 189,
                    y: 189
                },
                
                
            ],
            red: true,
            start: false,
            end: false,
        },

    ];

    class CreatDot {
        constructor(i, x, y, path, red, start, end) {
            this.index = i;
            this.x = x;
            this.y = y;
            this.path = path;
            this.red = red;
            this.start = start;
            this.end = end;
        }

        createElement() {
            const container = document.querySelector('.gamewindow');
            const elemwrap = document.createElement("div");

            elemwrap.style.top = `${this.y}px`;
            elemwrap.style.left = `${this.x}px`;

            container.appendChild(elemwrap);

            elemwrap.classList.add('dot');
            elemwrap.setAttribute('id', `dot-${this.index}`);
            if(this.red){
               elemwrap.classList.add('dot--red'); 
            }else if(this.start){
                elemwrap.classList.add('dot--start');              
            }else if(this.end){
                elemwrap.classList.add('dot--end');
            }else{
                elemwrap.classList.add('dot--grey');
            }
        }

        moveGirl(){
            const btn = document.querySelector('.move');
            let counter = 0;
            btn.addEventListener('click', ()=>{
                ++counter;

                if(this.index == counter){
                    const girl = document.querySelector('.girl');
                    const stepX = 0;
                    const stepY  = 57;
                    this.path.forEach((pause, i) => {
                        setTimeout(()=>{
                            girl.style.cssText = `top: ${pause.y - stepY}px; left: ${pause.x  - stepX}px;`;
                        }, 500 * i);
                    });
                }
            });
        }
    }

    arrDot.forEach((el, i) => {
        let dot = new CreatDot(i, el.x0, el.y0, el.path, el.red, el.start, el.end);
        dot.createElement();
        dot.moveGirl();
    });
};

export default {
	init
};