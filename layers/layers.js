ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3003").setExtent([1440160.992861, 4490875.488560, 1445087.081050, 4497290.431762]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_TIMEDISTANCE_BIKEREGULAR_1_1 = new ol.format.GeoJSON();
var features_TIMEDISTANCE_BIKEREGULAR_1_1 = format_TIMEDISTANCE_BIKEREGULAR_1_1.readFeatures(json_TIMEDISTANCE_BIKEREGULAR_1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3003'});
var jsonSource_TIMEDISTANCE_BIKEREGULAR_1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TIMEDISTANCE_BIKEREGULAR_1_1.addFeatures(features_TIMEDISTANCE_BIKEREGULAR_1_1);
var lyr_TIMEDISTANCE_BIKEREGULAR_1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TIMEDISTANCE_BIKEREGULAR_1_1, 
                style: style_TIMEDISTANCE_BIKEREGULAR_1_1,
                popuplayertitle: 'TIMEDISTANCE_BIKEREGULAR_1',
                interactive: true,
    title: 'TIMEDISTANCE_BIKEREGULAR_1<br />\
    <img src="styles/legend/TIMEDISTANCE_BIKEREGULAR_1_1_0.png" /> 5 min<br />\
    <img src="styles/legend/TIMEDISTANCE_BIKEREGULAR_1_1_1.png" /> 10 min<br />\
    <img src="styles/legend/TIMEDISTANCE_BIKEREGULAR_1_1_2.png" /> 15 min<br />\
    <img src="styles/legend/TIMEDISTANCE_BIKEREGULAR_1_1_3.png" /> 20 min<br />\
    <img src="styles/legend/TIMEDISTANCE_BIKEREGULAR_1_1_4.png" /> 25 min<br />\
    <img src="styles/legend/TIMEDISTANCE_BIKEREGULAR_1_1_5.png" /> 30<br />\
    <img src="styles/legend/TIMEDISTANCE_BIKEREGULAR_1_1_6.png" /> <br />'
        });
var format_CASE_2 = new ol.format.GeoJSON();
var features_CASE_2 = format_CASE_2.readFeatures(json_CASE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3003'});
var jsonSource_CASE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CASE_2.addFeatures(features_CASE_2);
var lyr_CASE_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CASE_2, 
                style: style_CASE_2,
                popuplayertitle: 'CASE',
                interactive: true,
                title: '<img src="styles/legend/CASE_2.png" /> CASE'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_TIMEDISTANCE_BIKEREGULAR_1_1.setVisible(true);lyr_CASE_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_TIMEDISTANCE_BIKEREGULAR_1_1,lyr_CASE_2];
lyr_TIMEDISTANCE_BIKEREGULAR_1_1.set('fieldAliases', {'id': 'id', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_CASE_2.set('fieldAliases', {'id': 'id', 'cat_01': 'cat_01', 'cat_02': 'cat_02', 'cat_03': 'cat_03', 'cat_04': 'cat_04', 'cat_05': 'cat_05', 'area_m': 'area_m', });
lyr_TIMEDISTANCE_BIKEREGULAR_1_1.set('fieldImages', {'id': '', 'AA_MINS': '', 'AA_MODE': '', 'TOTAL_POP': '', });
lyr_CASE_2.set('fieldImages', {'id': '', 'cat_01': '', 'cat_02': '', 'cat_03': '', 'cat_04': '', 'cat_05': '', 'area_m': '', });
lyr_TIMEDISTANCE_BIKEREGULAR_1_1.set('fieldLabels', {'id': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr_CASE_2.set('fieldLabels', {'id': 'no label', 'cat_01': 'no label', 'cat_02': 'no label', 'cat_03': 'no label', 'cat_04': 'no label', 'cat_05': 'no label', 'area_m': 'no label', });
lyr_CASE_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});