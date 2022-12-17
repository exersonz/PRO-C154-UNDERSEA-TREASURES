AFRAME.registerComponent("target-coins", {
    init: function(){
        for(var i = 1; i <= 25; i++)
        {
            var id = `coins${i}`; //ids for each coin created

            //position variables
            var posX = (Math.random()*1000+(-800));
            var posY = (Math.random()*2+(-500));
            var posZ = (Math.random()*3000+(-1000));

            var position = {x: posX, y: posY, z: posZ};
            this.createCoins(id, position);
        }
    },
    createCoins: (id, position) => {
        //getting island element
        var islandEl = document.querySelector("#island");
        //creating the coin entity
        var coinEl = document.createElement("a-entity");

        coinEl.setAttribute("scale", {x: 100, y: 100, z: 100});
        coinEl.setAttribute(
            "gltf-model",
            "./coin/scene.gltf"
        );

        coinEl.setAttribute("position", position);

        //animated models
        coinEl.setAttribute("animation-mixer", {}); //animation-mixer-component activates the animation of the model
        //append the coin entity as the child of the island entity
        islandEl.appendChild(coinEl);
    }
});