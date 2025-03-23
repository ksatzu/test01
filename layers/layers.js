ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:25832").setExtent([544677.871300, 4459372.885189, 578174.121300, 4488009.406611]);
var wms_layers = [];


        var lyr_GoogleSatellite = new ol.layer.Tile({
            'title': 'Google Satellite',
            'baseLayer':'true',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_Particelle_WMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php",
                attributions: "<a class='legend'><b>Particelle_WMS</b><br />\
                <img src=''></a>",
                params: {
                "LAYERS": "CP.CadastralParcel",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Particelle_WMS<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src=""></a>',
            popuplayertitle: 'Particelle_WMS',
            permalink: 'Particelle_WMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_Particelle_WMS, 1]);
    lyr_Particelle_WMS.setVisible(false);
var lyr_Fabbricati_WMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php",
                attributions: "<a class='legend'><b>Fabbricati_WMS</b><br />\
                <img src=''></a>",
                params: {
                "LAYERS": "fabbricati",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Fabbricati_WMS<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src=""></a>',
            popuplayertitle: 'Fabbricati_WMS',
            permalink: 'Fabbricati_WMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_Fabbricati_WMS, 1]);
    lyr_Fabbricati_WMS.setVisible(false);
var lyr_Strade_WMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php",
                attributions: "<a class='legend'><b>Strade_WMS</b><br />\
                <img src=''></a>",
                params: {
                "LAYERS": "strade",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Strade_WMS<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src=""></a>',
            popuplayertitle: 'Strade_WMS',
            permalink: 'Strade_WMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_Strade_WMS, 0]);
    lyr_Strade_WMS.setVisible(false);
var lyr_Acque_WMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php",
                attributions: "<a class='legend'><b>Acque_WMS</b><br />\
                <img src=''></a>",
                params: {
                "LAYERS": "acque",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Acque_WMS<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src=""></a>',
            popuplayertitle: 'Acque_WMS',
            permalink: 'Acque_WMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_Acque_WMS, 0]);
    lyr_Acque_WMS.setVisible(false);
var lyr_Mappe_WMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php",
                attributions: "<a class='legend'><b>Mappe_WMS</b><br />\
                <img src=''></a>",
                params: {
                "LAYERS": "CP.CadastralZoning",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Mappe_WMS<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src=""></a>',
            popuplayertitle: 'Mappe_WMS',
            permalink: 'Mappe_WMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_Mappe_WMS, 1]);
    lyr_Mappe_WMS.setVisible(false);
var lyr_Vestizioni_WMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php",
                attributions: "<a class='legend'><b>Vestizioni_WMS</b><br />\
                <img src=''></a>",
                params: {
                "LAYERS": "vestizioni",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Vestizioni_WMS<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src=""></a>',
            popuplayertitle: 'Vestizioni_WMS',
            permalink: 'Vestizioni_WMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_Vestizioni_WMS, 1]);
    lyr_Vestizioni_WMS.setVisible(false);
var format_PianoUrbanisticoComunale = new ol.format.GeoJSON();
var features_PianoUrbanisticoComunale = format_PianoUrbanisticoComunale.readFeatures(json_PianoUrbanisticoComunale, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_PianoUrbanisticoComunale = new ol.source.Vector({
        attributions: '<a class="legend"><b>Piano Urbanistico Comunale</b><br />\
        <img src="styles/legend/PianoUrbanisticoComunale_0.png" /> A<br />\
        <img src="styles/legend/PianoUrbanisticoComunale_1.png" /> B<br />\
        <img src="styles/legend/PianoUrbanisticoComunale_2.png" /> C<br />\
        <img src="styles/legend/PianoUrbanisticoComunale_3.png" /> E<br />\
        <img src="styles/legend/PianoUrbanisticoComunale_4.png" /> S<br /></a>'
            });
jsonSource_PianoUrbanisticoComunale.addFeatures(features_PianoUrbanisticoComunale);
var lyr_PianoUrbanisticoComunale = new ol.layer.Vector({
            declutter: false,
            source:jsonSource_PianoUrbanisticoComunale, 
            style: style_PianoUrbanisticoComunale,
            permalink: "PianoUrbanisticoComunale",
            popuplayertitle: 'Piano Urbanistico Comunale',
            interactive: true,
            title: '<div id="layertitle">Piano Urbanistico Comunale<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="styles/legend/PianoUrbanisticoComunale_0.png" /> A<br />\
            <img src="styles/legend/PianoUrbanisticoComunale_1.png" /> B<br />\
            <img src="styles/legend/PianoUrbanisticoComunale_2.png" /> C<br />\
            <img src="styles/legend/PianoUrbanisticoComunale_3.png" /> E<br />\
            <img src="styles/legend/PianoUrbanisticoComunale_4.png" /> S<br /></a>'
                });
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
var format_Vestizione = new ol.format.GeoJSON();
var features_Vestizione = format_Vestizione.readFeatures(json_Vestizione, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_Vestizione = new ol.source.Vector({
        attributions: "<a class='legend'><b>Vestizione</b></a>"
        });
jsonSource_Vestizione.addFeatures(features_Vestizione);
var lyr_Vestizione = new ol.layer.Vector({
            declutter: false,
            source:jsonSource_Vestizione, 
            style: style_Vestizione,
            permalink: "Vestizione",
            popuplayertitle: 'Vestizione',
            interactive: true,
            title: 'Vestizione'
            });
var format_Mappe = new ol.format.GeoJSON();
var features_Mappe = format_Mappe.readFeatures(json_Mappe, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_Mappe = new ol.source.Vector({
        attributions: '<a class="legend"><img src="styles/legend/Mappe.png" /> <b>Mappe</b>'
        });
jsonSource_Mappe.addFeatures(features_Mappe);
var lyr_Mappe = new ol.layer.Vector({
            declutter: false,
            source:jsonSource_Mappe, 
            style: style_Mappe,
            permalink: "Mappe",
            popuplayertitle: 'Mappe',
            interactive: true,
            title: '<img src="styles/legend/Mappe.png" /> Mappe'
            });
var format_Maschera = new ol.format.GeoJSON();
var features_Maschera = format_Maschera.readFeatures(json_Maschera, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_Maschera = new ol.source.Vector({
        attributions: '<a class="legend"><img src="styles/legend/Maschera.png" /> <b>Maschera</b>'
        });
jsonSource_Maschera.addFeatures(features_Maschera);
var lyr_Maschera = new ol.layer.Vector({
            declutter: false,
            source:jsonSource_Maschera, 
            style: style_Maschera,
            permalink: "Maschera",
            popuplayertitle: 'Maschera',
            interactive: true,
            title: '<img src="styles/legend/Maschera.png" /> Maschera'
            });
var format_LimiteComune = new ol.format.GeoJSON();
var features_LimiteComune = format_LimiteComune.readFeatures(json_LimiteComune, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_LimiteComune = new ol.source.Vector({
        attributions: '<a class="legend"><img src="styles/legend/LimiteComune.png" /> <b>Limite Comune</b>'
        });
jsonSource_LimiteComune.addFeatures(features_LimiteComune);
var lyr_LimiteComune = new ol.layer.Vector({
            declutter: false,
            source:jsonSource_LimiteComune, 
            style: style_LimiteComune,
            permalink: "LimiteComune",
            popuplayertitle: 'Limite Comune',
            interactive: true,
            title: '<img src="styles/legend/LimiteComune.png" /> Limite Comune'
            });
var group_Cartografiagenerale = new ol.layer.Group({
                                layers: [lyr_Maschera,lyr_LimiteComune,],
                                openInLayerSwitcher: true,
                                title: 'Cartografia generale'});
var group_Catasto = new ol.layer.Group({
                                layers: [lyr_Particelle,lyr_Vestizione,lyr_Mappe,],
                                openInLayerSwitcher: true,
                                title: 'Catasto'});
var group_PianoUrbanisticoComunale = new ol.layer.Group({
                                layers: [lyr_PianoUrbanisticoComunale,],
                                openInLayerSwitcher: true,
                                title: 'Piano Urbanistico Comunale'});
var group_PianoPaesaggisticoRegionale = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'Piano Paesaggistico Regionale'});
var group_Dlgsn422004art142 = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'D.lgs. n. 42/2004 - art. 142'});
var group_Vincolisovracomunali = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'Vincoli sovracomunali'});
var group_PAIPGRAPSFF2023 = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'PAI-PGRA-PSFF 2023'});
var group_Areepercorsedalfuoco = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'Aree percorse dal fuoco'});
var group_CatastoWMS = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'Catasto WMS'});
var group_Basemap = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite,],
                                openInLayerSwitcher: true,
                                title: 'Basemap'});
var group_CBCartografiadibase = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'CB - Cartografia di base'});
var group_AMAmbitidipaesaggio = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'AM - Ambiti di paesaggio'});
var group_AABenipaesaggistici143 = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'AA - Beni paesaggistici 143'});
var group_AABenipaesaggistici142 = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'AA - Beni paesaggistici 142'});
var group_ASBENIPAESAGGISTICIEBENIIDENTITARI = new ol.layer.Group({
                                layers: [],
                                openInLayerSwitcher: true,
                                title: 'AS - BENI PAESAGGISTICI E BENI IDENTITARI'});
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

lyr_GoogleSatellite.setVisible(true);lyr_Particelle_WMS.setVisible(false);lyr_Fabbricati_WMS.setVisible(false);lyr_Strade_WMS.setVisible(true);lyr_Acque_WMS.setVisible(true);lyr_Mappe_WMS.setVisible(false);lyr_Vestizioni_WMS.setVisible(false);lyr_PianoUrbanisticoComunale.setVisible(true);lyr_Particelle.setVisible(true);lyr_Vestizione.setVisible(true);lyr_Mappe.setVisible(true);lyr_Maschera.setVisible(true);lyr_LimiteComune.setVisible(true);
var layersList = [group_Basemap,lyr_Particelle_WMS,lyr_Fabbricati_WMS,lyr_Strade_WMS,lyr_Acque_WMS,lyr_Mappe_WMS,lyr_Vestizioni_WMS,group_PianoUrbanisticoComunale,group_Catasto,group_Cartografiagenerale];
lyr_PianoUrbanisticoComunale.set('fieldAliases', {'ClassID': 'ClassID', 'Zona': 'Zona', });
lyr_Particelle.set('fieldAliases', {'CODE': 'CODE', 'CDU': 'CDU', });
lyr_Vestizione.set('fieldAliases', {'INSPIREID_': 'INSPIREID_', 'INSPIREI_1': 'INSPIREI_1', 'LABEL': 'LABEL', 'NATIONALCA': 'NATIONALCA', 'ADMINISTRA': 'ADMINISTRA', 'COMUNE': 'COMUNE', 'MAPPA': 'MAPPA', 'CODE': 'CODE', 'PPR_AMB_PA': 'PPR_AMB_PA', 'PAI_PI': 'PAI_PI', 'PAI_PG': 'PAI_PG', 'PAI_DP': 'PAI_DP', 'PAI_RI': 'PAI_RI', 'PAI_RG': 'PAI_RG', 'CDU': 'CDU', 'LINK': 'LINK', });
lyr_Mappe.set('fieldAliases', {'INSPIREID_': 'INSPIREID_', 'INSPIREI_1': 'INSPIREI_1', 'LABEL': 'LABEL', 'NATIONALCA': 'NATIONALCA', 'BEGINLIFES': 'BEGINLIFES', 'ENDLIFESPA': 'ENDLIFESPA', 'LEVEL': 'LEVEL', 'LEVELNAME': 'LEVELNAME', 'LEVELNAME_': 'LEVELNAME_', 'ORIGINALMA': 'ORIGINALMA', 'ADMINISTRA': 'ADMINISTRA', });
lyr_Maschera.set('fieldAliases', {'FID': 'FID', });
lyr_LimiteComune.set('fieldAliases', {'ClassID': 'ClassID', 'AVDICM': 'AVDICM', 'MNDICM': 'MNDICM', 'CIstat': 'CIstat', 'CBelfiore': 'CBelfiore', 'Nome': 'Nome', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Determina': 'Determina', 'Note': 'Note', });
lyr_PianoUrbanisticoComunale.set('fieldImages', {'ClassID': '', 'Zona': '', });
lyr_Particelle.set('fieldImages', {'CODE': '', 'CDU': '', });
lyr_Vestizione.set('fieldImages', {'INSPIREID_': '', 'INSPIREI_1': '', 'LABEL': '', 'NATIONALCA': '', 'ADMINISTRA': '', 'COMUNE': '', 'MAPPA': '', 'CODE': '', 'PPR_AMB_PA': '', 'PAI_PI': '', 'PAI_PG': '', 'PAI_DP': '', 'PAI_RI': '', 'PAI_RG': '', 'CDU': '', 'LINK': '', });
lyr_Mappe.set('fieldImages', {'INSPIREID_': '', 'INSPIREI_1': '', 'LABEL': '', 'NATIONALCA': '', 'BEGINLIFES': '', 'ENDLIFESPA': '', 'LEVEL': '', 'LEVELNAME': '', 'LEVELNAME_': '', 'ORIGINALMA': '', 'ADMINISTRA': '', });
lyr_Maschera.set('fieldImages', {'FID': '', });
lyr_LimiteComune.set('fieldImages', {'ClassID': '', 'AVDICM': '', 'MNDICM': '', 'CIstat': '', 'CBelfiore': '', 'Nome': '', 'Shape_Leng': '', 'Shape_Area': '', 'Determina': '', 'Note': '', });
lyr_PianoUrbanisticoComunale.set('fieldLabels', {'ClassID': 'no label', 'Zona': 'no label', });
lyr_Particelle.set('fieldLabels', {'CODE': 'no label', 'CDU': 'no label', });
lyr_Vestizione.set('fieldLabels', {'INSPIREID_': 'no label', 'INSPIREI_1': 'no label', 'LABEL': 'no label', 'NATIONALCA': 'no label', 'ADMINISTRA': 'no label', 'COMUNE': 'no label', 'MAPPA': 'no label', 'CODE': 'no label', 'PPR_AMB_PA': 'no label', 'PAI_PI': 'no label', 'PAI_PG': 'no label', 'PAI_DP': 'no label', 'PAI_RI': 'no label', 'PAI_RG': 'no label', 'CDU': 'no label', 'LINK': 'no label', });
lyr_Mappe.set('fieldLabels', {'INSPIREID_': 'no label', 'INSPIREI_1': 'no label', 'LABEL': 'no label', 'NATIONALCA': 'no label', 'BEGINLIFES': 'no label', 'ENDLIFESPA': 'no label', 'LEVEL': 'no label', 'LEVELNAME': 'no label', 'LEVELNAME_': 'no label', 'ORIGINALMA': 'no label', 'ADMINISTRA': 'no label', });
lyr_Maschera.set('fieldLabels', {'FID': 'no label', });
lyr_LimiteComune.set('fieldLabels', {'ClassID': 'no label', 'AVDICM': 'no label', 'MNDICM': 'no label', 'CIstat': 'no label', 'CBelfiore': 'no label', 'Nome': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Determina': 'no label', 'Note': 'no label', });
lyr_LimiteComune.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});