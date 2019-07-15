import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

import { Map as LeafletMap} from 'leaflet';
import * as dc_leaflet from 'dc.leaflet';

declare var L: any;
@Component({
    selector: 'app-here-map',
    templateUrl: './here-map.component.html',
    styleUrls: ['./here-map.component.css']
})

export class HereMapComponent implements OnInit, AfterViewInit {

    public mapMaxZoom: number = 18;
    public chart: dc_leaflet.markerChart;

    @ViewChild('chartContainer', {static: false}) chartContainer: ElementRef;
    @ViewChild('chartDiv', {static: false}) chartDiv: ElementRef;

    @ViewChild('map', {static: false})
    public mapElement: ElementRef;

    @Input('appId')
    public appId: string;
    @Input('appCode')
    public appCode: string;

    private map: any;
    public srcTiles: string;
    public width: string;
    public height: string;

    public constructor(/* private http: HttpClient */) {
        this.height = window.innerHeight/3 + 'px';
    }
    public ngOnInit() {
        this.srcTiles = 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}';
        // this.mapMade = new L.TileLayer(this.mapMadeUrl, {maxZoom: this.mapMaxZoom + 1});
    }
    ngAfterViewInit() {
        this.chart = new dc_leaflet.markerChart(this.chartDiv.nativeElement);
        this.map = this.chart.map;

        this.map = new LeafletMap(this.mapElement.nativeElement, {
            center: [39.7662195, -86.441277],
            zoom: 7,
            layers: [L.tileLayer(this.srcTiles)],
            zoomControl: true
        });
        console.log(this.chart);
        console.log(this.map);
    }
}
