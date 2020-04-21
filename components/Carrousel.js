import Glide from "@glidejs/glide";

const Carrousel = () => {
  new Glide(".glide").mount();

  return (
    <div class="glide">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">{imgList}</ul>
      </div>
    </div>
  );
}

export default Carrousel;