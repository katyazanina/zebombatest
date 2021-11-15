 // Modal
const init = () => {

    class modalCreate {
       get btnTrigger() {
            return document.querySelectorAll('[data-modal]');
       }
        get overlay() {
            return document.querySelector('.overlay');
       }
       open(popup){
            popup.classList.add('show');
            popup.classList.remove('hide');
            this.overlay.classList.add('show');
            this.overlay.classList.remove('hide');
            this.modalClose(popup);
       }
        close(popup) {
            popup.classList.add('hide');
            popup.classList.remove('show');
            this.overlay.classList.remove('show');
            this.overlay.classList.add('hide');
        }

       modalClose(popup){
            popup.addEventListener('click', (e) => {
                if (e.target === popup || e.target.getAttribute('data-close') == "") {
                     this.close(popup);
                }
            });
            this.overlay.addEventListener('click', (e) => {
                 this.close(popup);
            });
            document.addEventListener('keydown', (e) => {
                if (e.code === "Escape" && popup.classList.contains('show')) { 
                   this.close(popup);
                }
            });
        }

        modalOpen() {
           this.btnTrigger.forEach(btn => {

                btn.addEventListener('click', (e)=>{
                    let modal = document.querySelector(btn.dataset.href);
                    this.open(modal);                    
                });
        
           });
       }
    }

     let modal = new modalCreate ();
     modal.modalOpen();
    
};

export default {
	init
};