ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:25832").setExtent([544677.871300, 4459372.885189, 578174.121300, 4488009.406611]);
var wms_layers = [];

var format_Particelle = new ol.format.GeoJSON();
var features_Particelle = format_Particelle.readFeatures(json_Particelle, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_Particelle = new ol.source.Vector({
        attributions: '<a class="legend"><img src="styles/legend/Particelle.png" /> <b>Particelle</b>'
        });
jsonSource_Particelle.addFeatures(features_Particelle);
var lyr_Particelle = new ol.layer.Vector({
            declutter: false,
            source:jsonSource_Particelle, 
            style: style_Particelle,
            permalink: "Particelle",
            popuplayertitle: 'Particelle',
            interactive: true,
            title: '<img src="styles/legend/Particelle.png" /> Particelle'
            });
var group_Catasto = new ol.layer.Group({
                                layers: [lyr_Particelle,],
                                openInLayerSwitcher: true,
                                title: 'Catasto'});
var group_ASAREEDIINSEDIAMENTOPRODUTTIVO = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'AS - AREE DI INSEDIAMENTO PRODUTTIVO'});
var group_AIRETIINFRASTRUTTURE = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'AI - RETI INFRASTRUTTURE'});
var group_AAAREEDIINTERESSENATURALISTICOISTITUZIONALMENTETUTELATE = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'AA - AREE DI INTERESSE NATURALISTICO ISTITUZIONALMENTE TUTELATE'});
var group_AAAREERECUPEROAMBIENTALE = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'AA - AREE RECUPERO AMBIENTALE'});
var group_AICOMPONENTIASSETTOINSEDIATIVO = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'AI - COMPONENTI ASSETTO INSEDIATIVO'});
var group_AACOMPONENTIASSETTOAMBIENTALE = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'AA - COMPONENTI ASSETTO AMBIENTALE'});
var group_Dlgsn422004art142 = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'D.lgs. n. 42/2004 - art. 142'});
var group_CatastoWMS = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'Catasto WMS'});
var group_CatastoWFS = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'Catasto WFS'});
var group_temp = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'temp'});
var group_Databasegeotopograficoallascala110k = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'Database geotopografico alla scala 1:10k'});

lyr_Particelle.setVisible(true);
var layersList = [group_Catasto];
lyr_Particelle.set('fieldAliases', {'INSPIREID_': 'INSPIREID_', 'INSPIREI_1': 'INSPIREI_1', 'LABEL': 'LABEL', 'NATIONALCA': 'NATIONALCA', 'ADMINISTRA': 'ADMINISTRA', 'COMUNE': 'COMUNE', 'MAPPA': 'MAPPA', 'CODE': 'CODE', 'PPR_AMB_PA': 'PPR_AMB_PA', 'PAI_PI': 'PAI_PI', 'PAI_PG': 'PAI_PG', 'PAI_DP': 'PAI_DP', 'PAI_RI': 'PAI_RI', 'PAI_RG': 'PAI_RG', 'CDU': 'CDU', 'LINK': 'LINK', 'on_off': 'on_off', });
lyr_Particelle.set('fieldImages', {'INSPIREID_': '', 'INSPIREI_1': '', 'LABEL': '', 'NATIONALCA': '', 'ADMINISTRA': '', 'COMUNE': '', 'MAPPA': '', 'CODE': '', 'PPR_AMB_PA': '', 'PAI_PI': '', 'PAI_PG': '', 'PAI_DP': '', 'PAI_RI': '', 'PAI_RG': '', 'CDU': '', 'LINK': '', 'on_off': '', });
lyr_Particelle.set('fieldLabels', {'INSPIREID_': 'no label', 'INSPIREI_1': 'no label', 'LABEL': 'no label', 'NATIONALCA': 'no label', 'ADMINISTRA': 'no label', 'COMUNE': 'no label', 'MAPPA': 'no label', 'CODE': 'no label', 'PPR_AMB_PA': 'no label', 'PAI_PI': 'no label', 'PAI_PG': 'no label', 'PAI_DP': 'no label', 'PAI_RI': 'no label', 'PAI_RG': 'no label', 'CDU': 'no label', 'LINK': 'no label', 'on_off': 'no label', });
lyr_Particelle.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});