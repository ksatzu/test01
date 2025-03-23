ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:25832").setExtent([544677.871300, 4459372.885189, 578174.121300, 4488009.406611]);
var wms_layers = [];


        var lyr_GoogleSatellite = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_Particelle = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php",
                attributions: "<a class='legend'><b>Particelle</b><br />\
                <img src=''></a>",
                params: {
                "LAYERS": "CP.CadastralParcel",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Particelle<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src=""></a>',
            popuplayertitle: 'Particelle',
            permalink: 'Particelle',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_Particelle, 1]);
    lyr_Particelle.setVisible(false);
var lyr_Fabbricati = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php",
                attributions: "<a class='legend'><b>Fabbricati</b><br />\
                <img src=''></a>",
                params: {
                "LAYERS": "fabbricati",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Fabbricati<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src=""></a>',
            popuplayertitle: 'Fabbricati',
            permalink: 'Fabbricati',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_Fabbricati, 1]);
    lyr_Fabbricati.setVisible(false);
var lyr_Strade = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php",
                attributions: "<a class='legend'><b>Strade</b><br />\
                <img src=''></a>",
                params: {
                "LAYERS": "strade",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Strade<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src=""></a>',
            popuplayertitle: 'Strade',
            permalink: 'Strade',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_Strade, 0]);
    lyr_Strade.setVisible(false);
var lyr_Acque = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php",
                attributions: "<a class='legend'><b>Acque</b><br />\
                <img src=''></a>",
                params: {
                "LAYERS": "acque",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Acque<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src=""></a>',
            popuplayertitle: 'Acque',
            permalink: 'Acque',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_Acque, 0]);
    lyr_Acque.setVisible(false);
var lyr_Mappe = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php",
                attributions: "<a class='legend'><b>Mappe</b><br />\
                <img src=''></a>",
                params: {
                "LAYERS": "CP.CadastralZoning",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Mappe<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src=""></a>',
            popuplayertitle: 'Mappe',
            permalink: 'Mappe',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_Mappe, 1]);
    lyr_Mappe.setVisible(false);
var lyr_Vestizioni = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php",
                attributions: "<a class='legend'><b>Vestizioni</b><br />\
                <img src=''></a>",
                params: {
                "LAYERS": "vestizioni",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Vestizioni<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src=""></a>',
            popuplayertitle: 'Vestizioni',
            permalink: 'Vestizioni',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_Vestizioni, 1]);
    lyr_Vestizioni.setVisible(false);
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
                                layers: [lyr_Particelle,],
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

lyr_GoogleSatellite.setVisible(true);lyr_Particelle.setVisible(false);lyr_Fabbricati.setVisible(false);lyr_Strade.setVisible(true);lyr_Acque.setVisible(true);lyr_Mappe.setVisible(false);lyr_Vestizioni.setVisible(false);lyr_PianoUrbanisticoComunale.setVisible(true);lyr_Particelle.setVisible(true);lyr_Maschera.setVisible(true);lyr_LimiteComune.setVisible(true);
var layersList = [group_Basemap,lyr_Particelle,lyr_Fabbricati,lyr_Strade,lyr_Acque,lyr_Mappe,lyr_Vestizioni,group_PianoUrbanisticoComunale,group_Catasto,group_Cartografiagenerale];
lyr_PianoUrbanisticoComunale.set('fieldAliases', {'ClassID': 'ClassID', 'Zona': 'Zona', });
lyr_Particelle.set('fieldAliases', {'CODE': 'CODE', 'CDU': 'CDU', });
lyr_Maschera.set('fieldAliases', {'FID': 'FID', });
lyr_LimiteComune.set('fieldAliases', {'ClassID': 'ClassID', 'AVDICM': 'AVDICM', 'MNDICM': 'MNDICM', 'CIstat': 'CIstat', 'CBelfiore': 'CBelfiore', 'Nome': 'Nome', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Determina': 'Determina', 'Note': 'Note', });
lyr_PianoUrbanisticoComunale.set('fieldImages', {'ClassID': '', 'Zona': '', });
lyr_Particelle.set('fieldImages', {'CODE': '', 'CDU': '', });
lyr_Maschera.set('fieldImages', {'FID': '', });
lyr_LimiteComune.set('fieldImages', {'ClassID': '', 'AVDICM': '', 'MNDICM': '', 'CIstat': '', 'CBelfiore': '', 'Nome': '', 'Shape_Leng': '', 'Shape_Area': '', 'Determina': '', 'Note': '', });
lyr_PianoUrbanisticoComunale.set('fieldLabels', {'ClassID': 'no label', 'Zona': 'no label', });
lyr_Particelle.set('fieldLabels', {'CODE': 'no label', 'CDU': 'no label', });
lyr_Maschera.set('fieldLabels', {'FID': 'no label', });
lyr_LimiteComune.set('fieldLabels', {'ClassID': 'no label', 'AVDICM': 'no label', 'MNDICM': 'no label', 'CIstat': 'no label', 'CBelfiore': 'no label', 'Nome': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Determina': 'no label', 'Note': 'no label', });
lyr_LimiteComune.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});