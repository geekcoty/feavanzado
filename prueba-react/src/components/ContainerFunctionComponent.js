import TitleClassComponent from "./Titleclasscomponent"
import SubtitleClassComponent from "./Subtitleclasscomponent"
import ProductClassComponent from "./Productclasscomponent"

function ContainerFunctionComponent() {
  <>
  <div id="root">
    <TitleClassComponent />
    <TitleClassComponent />
    <SubtitleClassComponent/>
    <TitleClassComponent/>
    <TitleClassComponent />
    <div className="carousel">
      <ProductClassComponent />
    </div>
  </div>
  </>
}

export default ContainerFunctionComponent;