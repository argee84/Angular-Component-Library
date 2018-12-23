import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { DomService } from './dom.service';


@Injectable()
export class ModalService {

  constructor( private _domService: DomService, private rendererFactory: RendererFactory2 ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  private modalWrapperId = 'modal';
  private modalElementId = 'modal-content';
  private overlayElementId = 'modal-overlay';
  private renderer: Renderer2;

  init(component: any, inputs: object, outputs: object) {
    let componentConfig = {
      inputs:inputs,
      outputs:outputs
    };
    this._domService.appendComponentTo(this.modalElementId, component, componentConfig);
    document.getElementById(this.modalWrapperId).className = 'show';
    document.getElementById(this.modalElementId).className = 'show';
    document.getElementById(this.overlayElementId).className = 'show';

    this.renderer.addClass(document.body, 'modal-openend');
  }

  destroy() {
    this._domService.removeComponent();
    document.getElementById(this.modalWrapperId).className = 'hidden';
    document.getElementById(this.modalElementId).className = 'hidden';
    document.getElementById(this.overlayElementId).className = 'hidden';

    this.renderer.removeClass(document.body, 'modal-openend');
  }
}
