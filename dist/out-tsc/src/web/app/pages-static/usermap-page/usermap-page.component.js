import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import * as d3 from 'd3';
import { feature } from 'topojson';
import { default as userMapData } from '../../../data/userMapData.json';
import { default as worldTopo } from '../../../data/worldTopo.json';
/**
 * Usermap page.
 */
var UsermapPageComponent = /** @class */ (function () {
    function UsermapPageComponent() {
        this.lastUpdated = '';
        this.nInstitutions = 0;
        this.nCountries = 0;
    }
    UsermapPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lastUpdated = userMapData.lastUpdated;
        this.nInstitutions = 0;
        var countryNames = Object.keys(userMapData.institutes);
        for (var _i = 0, countryNames_1 = countryNames; _i < countryNames_1.length; _i++) {
            var country = countryNames_1[_i];
            this.nInstitutions += userMapData.institutes[country].length;
        }
        this.nCountries = countryNames.length;
        this.drawUsermap();
        d3.select(window).on('resize', function () { return _this.drawUsermap(); });
    };
    /**
     * Draws the usermap.
     */
    UsermapPageComponent.prototype.drawUsermap = function () {
        d3.select('#world-map').html('');
        var container = document.getElementById('world-map');
        var width = container.offsetWidth;
        var height = width / 2;
        var tooltip = d3.select('#world-map').append('div').attr('class', 'usermap-tooltip hidden');
        var projection = d3.geoMercator()
            .translate([(width / 2), (height / 2)])
            .scale(width / 2 / Math.PI);
        var g;
        var move = function () {
            var scale = d3.event.transform.k;
            var ht = height / 4;
            var tx = Math.min((width / height) * (scale - 1), Math.max(width * (1 - scale), d3.event.transform.x));
            var ty = Math.min(ht * (scale - 1) + ht * scale, Math.max(height * (1 - scale) - ht * scale, d3.event.transform.y));
            var translate = [tx, ty];
            g.attr('transform', "translate(" + translate + ")scale(" + scale + ")");
        };
        var zoom = d3.zoom()
            .scaleExtent([1, 16])
            .on('zoom', move);
        var svg = d3.select('#world-map').append('svg')
            .attr('width', width)
            .attr('height', height)
            .call(zoom)
            .append('g');
        g = svg.append('g');
        var countries = feature(worldTopo, worldTopo.objects.countries).features;
        var institutes = userMapData.institutes;
        var countryNames = Object.keys(institutes);
        g.selectAll('.country').data(countries)
            .enter().insert('path')
            .attr('class', 'usermap-country')
            .attr('d', d3.geoPath().projection(projection))
            .style('fill', function (d) { return countryNames.indexOf(d.properties.name) === -1 ? 'F2F2F2' : '428BCA'; })
            .on('mouseover', function (event) {
            var country = event.properties.name;
            if (!institutes[country]) {
                return;
            }
            var mouse = d3.mouse(svg.node()).map(function (d) { return parseInt(d, 10); });
            var offsetLeft = mouse[0] + container.offsetLeft + 20;
            var offsetTop = mouse[1] + container.offsetTop + 10;
            tooltip.classed('hidden', false)
                .attr('style', "left: " + offsetLeft + "px; top: " + offsetTop + "px;")
                .html(country + ": " + institutes[country].length + " institutes");
        })
            .on('mouseout', function () { return tooltip.classed('hidden', true); });
    };
    UsermapPageComponent = tslib_1.__decorate([
        Component({
            selector: 'tm-usermap-page',
            templateUrl: './usermap-page.component.html',
            styleUrls: ['./usermap-page.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], UsermapPageComponent);
    return UsermapPageComponent;
}());
export { UsermapPageComponent };
//# sourceMappingURL=usermap-page.component.js.map