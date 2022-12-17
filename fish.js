AFRAME.registerComponent("swimming-fishes", {
    init: function(){
        for(var i = 1; i <= 22; i++)
        {
            var id = `fish${i}`; //ids for each fish created

            //position variables
            var posX = (Math.random()*1000+(-800));
            var posY = (Math.random()*200+(-500));
            var posZ = (Math.random()*1000+(-800));

            var position = {x: posX, y: posY, z: posZ};
            this.swimmingFish(id, position);
        }
    },
    swimmingFish: (id, position) => {
        //getting island element
        var islandEl = document.querySelector("#island");
        //creating fish model entity
        var fishEl = document.createElement("a-entity");

        fishEl.setAttribute("scale", {x: 500, y: 500, z: 500});
        fishEl.setAttribute(
            "gltf-model",
            "./fish/scene.gltf"
        );

        fishEl.setAttribute("position", position);

        //animated models
        fishEl.setAttribute("animation-mixer", {}); //animation-mixer-component activates the animation of the model
        //append the fish entity as the child of the island entity
        islandEl.appendChild(fishEl)
    }
});