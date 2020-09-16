import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import Stamen from 'ol/source/Stamen';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import VectorSource from 'ol/source/Vector';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['/map.component.css'],
})
export class MapComponent implements OnInit {

  map: Map;

  ngOnInit() {

    var feature = new Feature(new Point(olProj.fromLonLat([11.244250, 51.135250])));

    this.map = new Map({
      target: 'autosattlerei_map',
      controls: [],
      layers: [
        new TileLayer({
          source: new Stamen({
            layer: 'watercolor',
          }),
        }),
        new TileLayer({
          source: new Stamen({
            layer: 'terrain-labels',
          })
        }),
        new VectorLayer({ 
          source: new VectorSource({ 
            features: [feature]
          }),
          style: new Style({
            image: new Icon(({
              anchor: [0.5, 46],
              anchorXUnits: 'fraction',
              anchorYUnits: 'pixels',
              opacity: 0.95,
              scale: 0.3,
              src: '../../assets/img/markerIcon.png'
            })),
          })
        })
      ],
      view: new View({
        center: olProj.fromLonLat([11.244250, 51.135250]),
        zoom: 10,
      })
    });
  }
}
