export default{
    state:{
        bob: {
            top: 0,
            left: 0,
            size: 50,
            speed: 0.5,
            flip: false,
        },
    },
    mutations:{
        FEED(state) {
            state.bob.size += 10
        },
        DIET(state) {
            state.bob.size = 50
        },
        MOVE(state) {
            let timing = Math.floor(Math.random() * (3000 - 2000)) + 2000;
            setInterval(() => {
                let newY = Math.floor(Math.random() * (80 - 20)) + 20;
                let newX = Math.floor(Math.random() * (80 - 20)) + 20;
        
                let newSpeed = Math.random() * (1 - 0) + 0;
                let diff = state.bob.left - newX;
                if (diff > 0) {
                    state.bob.flip = true;
                } else if (diff < 0) {
                    state.bob.flip = false;
                }
                state.bob.top = newY;
                state.bob.left = newX;
                state.bob.speed = newSpeed;
            }, timing);
        },
    },
    actions:{
        feed(context) {
            context.commit('FEED')
        },
        diet(context) {
            context.commit('DIET')
        },
    },
    getters:{
        
    }
}
