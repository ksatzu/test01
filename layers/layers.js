ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:25832").setExtent([551577, 4463447, 571240, 4482031]);
var wms_layers = [];

var format_Sfondobianco = new ol.format.GeoJSON();
var features_Sfondobianco = format_Sfondobianco.readFeatures(json_Sfondobianco, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_Sfondobianco = new ol.source.Vector({
        attributions: '<a class="legend"><img src="styles/legend/Sfondobianco.png" /> <b>Sfondo bianco</b>'
        });
jsonSource_Sfondobianco.addFeatures(features_Sfondobianco);
var lyr_Sfondobianco = new ol.layer.Vector({
            declutter: false,
            source:jsonSource_Sfondobianco, 
            style: style_Sfondobianco,
            permalink: "Sfondobianco",
            popuplayertitle: 'Sfondo bianco',
            interactive: false,
            'baseLayer':'true',
            title: '<img src="" /> Sfondo bianco'
            });

        var lyr_OSMStandard = new ol.layer.Tile({
            'title': 'OSM Standard',
            'baseLayer':'true',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">OSM</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleHybrid = new ol.layer.Tile({
    'title': 'Google Hybrid',
    'baseLayer': true,
    'opacity': 1.0,
    source: new ol.source.XYZ({
        attributions: ' &middot; <a href="https://www.google.com/permissions/geoguidelines/attr-guide.html">Google</a>',
        url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}&apistyle=s',
        maxZoom: 19,  // Limitiamo lo zoom massimo per migliorare la velocità
        crossOrigin: 'anonymous',  // Evita problemi di sicurezza CORS
        cacheSize: 512,  // Riduce il carico della memoria mantenendo solo 512 tile in cache
        transition: 0  // Disabilita le transizioni per un caricamento più rapido
    })
});

    var lyr_GoogleSatellite = new ol.layer.Tile({
    'title': 'Google Satellite',
    'baseLayer': true,
    'opacity': 1.0,
    source: new ol.source.XYZ({
        attributions: ' &middot; <a href="https://www.google.com/permissions/geoguidelines/attr-guide.html">Google</a>',
        url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
        maxZoom: 19,  // Riduciamo leggermente lo zoom massimo
        crossOrigin: 'anonymous',
        cacheSize: 512,  // Limita il numero di tile in memoria per evitare rallentamenti
        transition: 0  // Rimuove l’effetto di transizione per caricare le tile più velocemente
    })
});

var lyr_Ortofoto2019 = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserverraster/ows",
                attributions: "<a class='legend'><b>Ortofoto 2019</b><br />\
                <img src=''></a>",
                params: {
                "LAYERS": "raster:ortofoto_2019",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Ortofoto 2019<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src=""></a>',
            popuplayertitle: 'Ortofoto 2019',
            permalink: 'Ortofoto2019',
            'baseLayer':'true',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_Ortofoto2019, 0]);
    lyr_Ortofoto2019.setVisible(false);
var format_Usicivici = new ol.format.GeoJSON();
var features_Usicivici = format_Usicivici.readFeatures(json_Usicivici, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_Usicivici = new ol.source.Vector({
        attributions: '<a class="legend"><img src="styles/legend/Usicivici.png" /> <b>Usi civici</b>'
        });
jsonSource_Usicivici.addFeatures(features_Usicivici);
var lyr_Usicivici = new ol.layer.Vector({
            declutter: false,
            source:jsonSource_Usicivici, 
            style: style_Usicivici,
            permalink: "Usicivici",
            popuplayertitle: 'Usi civici',
            interactive: true,
            title: '<img src="styles/legend/Usicivici.png" /> Usi civici'
            });
var lyr_PerimetrideisoprassuolipercorsidalfuocoWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserver/ows?version%3D1.3.0",
                attributions: "<a class='legend'><b>Perimetri dei soprassuoli percorsi dal fuoco (WMS)</b><br />\
                <img src='https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Aareeincendiateperim2024'></a>",
                params: {
                "LAYERS": "dbu:areeincendiateperim2024",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Perimetri dei soprassuoli percorsi dal fuoco (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Aareeincendiateperim2024"></a>',
            popuplayertitle: 'Perimetri dei soprassuoli percorsi dal fuoco (WMS)',
            permalink: 'PerimetrideisoprassuolipercorsidalfuocoWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_PerimetrideisoprassuolipercorsidalfuocoWMS, 1]);
    lyr_PerimetrideisoprassuolipercorsidalfuocoWMS.setVisible(false);
var lyr_RischiogeomorfologicoWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserver/ows?version%3D1.3.0",
                attributions: "<a class='legend'><b>Rischio geomorfologico (WMS)</b><br />\
                <img src='https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Apai_rischio_geomorfologico_rev_dic_23'></a>",
                params: {
                "LAYERS": "dbu:pai_rischio_geomorfologico_rev_dic_23",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Rischio geomorfologico (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Apai_rischio_geomorfologico_rev_dic_23"></a>',
            popuplayertitle: 'Rischio geomorfologico (WMS)',
            permalink: 'RischiogeomorfologicoWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_RischiogeomorfologicoWMS, 1]);
    lyr_RischiogeomorfologicoWMS.setVisible(false);
var lyr_RischioidraulicoWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserver/ows?version%3D1.3.0",
                attributions: "<a class='legend'><b>Rischio idraulico (WMS)</b><br />\
                <img src='https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Apai_rischio_idraulico_rev_dic_23'></a>",
                params: {
                "LAYERS": "dbu:pai_rischio_idraulico_rev_dic_23",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Rischio idraulico (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Apai_rischio_idraulico_rev_dic_23"></a>',
            popuplayertitle: 'Rischio idraulico (WMS)',
            permalink: 'RischioidraulicoWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_RischioidraulicoWMS, 1]);
    lyr_RischioidraulicoWMS.setVisible(false);
var lyr_DannopotenzialeWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserver/ows?version%3D1.3.0",
                attributions: "<a class='legend'><b>Danno potenziale (WMS)</b><br />\
                <img src='https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Apai_danno_potenziale_rev_dic_23'></a>",
                params: {
                "LAYERS": "dbu:pai_danno_potenziale_rev_dic_23",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Danno potenziale (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Apai_danno_potenziale_rev_dic_23"></a>',
            popuplayertitle: 'Danno potenziale (WMS)',
            permalink: 'DannopotenzialeWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_DannopotenzialeWMS, 1]);
    lyr_DannopotenzialeWMS.setVisible(false);
var lyr_PericologeomorfologicoWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserver/ows?version%3D1.3.0",
                attributions: "<a class='legend'><b>Pericolo geomorfologico (WMS)</b><br />\
                <img src='https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Apai_pericolo_geomorfologico_rev_dic_23'></a>",
                params: {
                "LAYERS": "dbu:pai_pericolo_geomorfologico_rev_dic_23",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Pericolo geomorfologico (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Apai_pericolo_geomorfologico_rev_dic_23"></a>',
            popuplayertitle: 'Pericolo geomorfologico (WMS)',
            permalink: 'PericologeomorfologicoWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_PericologeomorfologicoWMS, 1]);
    lyr_PericologeomorfologicoWMS.setVisible(false);
var lyr_PericoloidraulicoWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserver/ows?version%3D1.3.0",
                attributions: "<a class='legend'><b>Pericolo idraulico (WMS)</b><br />\
                <img src='https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Apai_pericolo_idraulico_rev_dic_23'></a>",
                params: {
                "LAYERS": "dbu:pai_pericolo_idraulico_rev_dic_23",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Pericolo idraulico (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Apai_pericolo_idraulico_rev_dic_23"></a>',
            popuplayertitle: 'Pericolo idraulico (WMS)',
            permalink: 'PericoloidraulicoWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_PericoloidraulicoWMS, 1]);
    lyr_PericoloidraulicoWMS.setVisible(false);
var lyr_Art142VulcanidatiindicativiWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserver/ows?version%3D1.3.0",
                attributions: "<a class='legend'><b>Art. 142 - Vulcani - dati indicativi (WMS)</b><br />\
                <img src='https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Aart142_vulcani_indic'></a>",
                params: {
                "LAYERS": "dbu:art142_vulcani_indic",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Art. 142 - Vulcani - dati indicativi (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Aart142_vulcani_indic"></a>',
            popuplayertitle: 'Art. 142 - Vulcani - dati indicativi (WMS)',
            permalink: 'Art142VulcanidatiindicativiWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_Art142VulcanidatiindicativiWMS, 1]);
    lyr_Art142VulcanidatiindicativiWMS.setVisible(false);
var lyr_Art142Fasciadi150mdaifiumidatiindicativiWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserver/ows?version%3D1.3.0",
                attributions: "<a class='legend'><b>Art. 142 - Fascia di 150 m dai fiumi - dati indicativi (WMS)</b><br />\
                <img src='https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Aart142_fascia_150m_fiumi_indic'></a>",
                params: {
                "LAYERS": "dbu:art142_fascia_150m_fiumi_indic",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Art. 142 - Fascia di 150 m dai fiumi - dati indicativi (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Aart142_fascia_150m_fiumi_indic"></a>',
            popuplayertitle: 'Art. 142 - Fascia di 150 m dai fiumi - dati indicativi (WMS)',
            permalink: 'Art142Fasciadi150mdaifiumidatiindicativiWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_Art142Fasciadi150mdaifiumidatiindicativiWMS, 1]);
    lyr_Art142Fasciadi150mdaifiumidatiindicativiWMS.setVisible(false);
var lyr_Art142FiumitorrenticorsidacquadatiindicativiWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserver/ows?version%3D1.3.0",
                attributions: "<a class='legend'><b>Art. 142 - Fiumi, torrenti, corsi d\'acqua - dati indicativi (WMS)</b><br />\
                <img src='https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Aart142_fiumi_torr_acq_el_indic'></a>",
                params: {
                "LAYERS": "dbu:art142_fiumi_torr_acq_el_indic",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Art. 142 - Fiumi, torrenti, corsi d\'acqua - dati indicativi (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Aart142_fiumi_torr_acq_el_indic"></a>',
            popuplayertitle: 'Art. 142 - Fiumi, torrenti, corsi d\'acqua - dati indicativi (WMS)',
            permalink: 'Art142FiumitorrenticorsidacquadatiindicativiWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_Art142FiumitorrenticorsidacquadatiindicativiWMS, 1]);
    lyr_Art142FiumitorrenticorsidacquadatiindicativiWMS.setVisible(false);
var lyr_Art142Territoricostierifascia300metridatiindicativiWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserver/ows?version%3D1.3.0",
                attributions: "<a class='legend'><b>Art. 142 - Territori costieri fascia 300 metri - dati indicativi (WMS)</b><br />\
                <img src='https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Aart142_territ_cost_300m_indic'></a>",
                params: {
                "LAYERS": "dbu:art142_territ_cost_300m_indic",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Art. 142 - Territori costieri fascia 300 metri - dati indicativi (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Aart142_territ_cost_300m_indic"></a>',
            popuplayertitle: 'Art. 142 - Territori costieri fascia 300 metri - dati indicativi (WMS)',
            permalink: 'Art142Territoricostierifascia300metridatiindicativiWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_Art142Territoricostierifascia300metridatiindicativiWMS, 1]);
    lyr_Art142Territoricostierifascia300metridatiindicativiWMS.setVisible(false);
var lyr_ComponentidipaesaggioWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserver/ows",
                attributions: "<a class='legend'><b>Componenti di paesaggio (WMS)</b><br />\
                <img src='https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Acomponentiambientali'></a>",
                params: {
                "LAYERS": "dbu:componentiambientali",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Componenti di paesaggio (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Acomponentiambientali"></a>',
            popuplayertitle: 'Componenti di paesaggio (WMS)',
            permalink: 'ComponentidipaesaggioWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_ComponentidipaesaggioWMS, 1]);
    lyr_ComponentidipaesaggioWMS.setVisible(false);
var lyr_ComponentiassettoinsediativoCWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserver/ows",
                attributions: "<a class='legend'><b>Componenti assetto insediativo - C (WMS)</b><br />\
                <img src='https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Acomponentiinsediativo_c'></a>",
                params: {
                "LAYERS": "dbu:componentiinsediativo_c",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Componenti assetto insediativo - C (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Acomponentiinsediativo_c"></a>',
            popuplayertitle: 'Componenti assetto insediativo - C (WMS)',
            permalink: 'ComponentiassettoinsediativoCWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_ComponentiassettoinsediativoCWMS, 1]);
    lyr_ComponentiassettoinsediativoCWMS.setVisible(false);
var lyr_ComponentiassettoinsediativoBWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserver/ows",
                attributions: "<a class='legend'><b>Componenti assetto insediativo - B (WMS)</b><br />\
                <img src='https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Acomponentiinsediativo_b'></a>",
                params: {
                "LAYERS": "dbu:componentiinsediativo_b",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Componenti assetto insediativo - B (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Acomponentiinsediativo_b"></a>',
            popuplayertitle: 'Componenti assetto insediativo - B (WMS)',
            permalink: 'ComponentiassettoinsediativoBWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_ComponentiassettoinsediativoBWMS, 1]);
    lyr_ComponentiassettoinsediativoBWMS.setVisible(false);
var lyr_ComponentiassettoinsediativoAWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserver/ows",
                attributions: "<a class='legend'><b>Componenti assetto insediativo - A (WMS)</b><br />\
                <img src='https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Acomponentiinsediativo_a'></a>",
                params: {
                "LAYERS": "dbu:componentiinsediativo_a",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Componenti assetto insediativo - A (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Acomponentiinsediativo_a"></a>',
            popuplayertitle: 'Componenti assetto insediativo - A (WMS)',
            permalink: 'ComponentiassettoinsediativoAWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_ComponentiassettoinsediativoAWMS, 1]);
    lyr_ComponentiassettoinsediativoAWMS.setVisible(false);
var lyr_GrandiareeindustrialiWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserver/ows",
                attributions: "<a class='legend'><b>Grandi aree industriali (WMS)</b><br />\
                <img src='https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Agrandiareeindus_dgr1624_280317'></a>",
                params: {
                "LAYERS": "dbu:grandiareeindus_dgr1624_280317",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Grandi aree industriali (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Agrandiareeindus_dgr1624_280317"></a>',
            popuplayertitle: 'Grandi aree industriali (WMS)',
            permalink: 'GrandiareeindustrialiWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_GrandiareeindustrialiWMS, 1]);
    lyr_GrandiareeindustrialiWMS.setVisible(false);
var lyr_EdificatoCTRWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserver/ows",
                attributions: "<a class='legend'><b>Edificato CTR (WMS)</b><br />\
                <img src='https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Aedificatoctr'></a>",
                params: {
                "LAYERS": "dbu:edificatoctr",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Edificato CTR (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Aedificatoctr"></a>',
            popuplayertitle: 'Edificato CTR (WMS)',
            permalink: 'EdificatoCTRWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_EdificatoCTRWMS, 1]);
    lyr_EdificatoCTRWMS.setVisible(false);
var lyr_ScaviWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserver/ows",
                attributions: "<a class='legend'><b>Scavi (WMS)</b><br />\
                <img src='https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Ascavi'></a>",
                params: {
                "LAYERS": "dbu:scavi",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Scavi (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Ascavi"></a>',
            popuplayertitle: 'Scavi (WMS)',
            permalink: 'ScaviWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_ScaviWMS, 1]);
    lyr_ScaviWMS.setVisible(false);
var lyr_DiscaricheWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserver/ows",
                attributions: "<a class='legend'><b>Discariche (WMS)</b><br />\
                <img src='https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Adiscariche'></a>",
                params: {
                "LAYERS": "dbu:discariche",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Discariche (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Adiscariche"></a>',
            popuplayertitle: 'Discariche (WMS)',
            permalink: 'DiscaricheWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_DiscaricheWMS, 1]);
    lyr_DiscaricheWMS.setVisible(false);
var lyr_AreeminerariedismesseWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserver/ows",
                attributions: "<a class='legend'><b>Aree minerarie dismesse (WMS)</b><br />\
                <img src='https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Aareeminerariedismesse'></a>",
                params: {
                "LAYERS": "dbu:areeminerariedismesse",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Aree minerarie dismesse (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Aareeminerariedismesse"></a>',
            popuplayertitle: 'Aree minerarie dismesse (WMS)',
            permalink: 'AreeminerariedismesseWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_AreeminerariedismesseWMS, 1]);
    lyr_AreeminerariedismesseWMS.setVisible(false);
var lyr_SitiinquinatiWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserver/ows",
                attributions: "<a class='legend'><b>Siti inquinati (WMS)</b><br />\
                <img src='https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Asitiinquinati'></a>",
                params: {
                "LAYERS": "dbu:sitiinquinati",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Siti inquinati (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Asitiinquinati"></a>',
            popuplayertitle: 'Siti inquinati (WMS)',
            permalink: 'SitiinquinatiWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_SitiinquinatiWMS, 1]);
    lyr_SitiinquinatiWMS.setVisible(false);
var lyr_SistemaregionaledeiparchiWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserver/ows",
                attributions: "<a class='legend'><b>Sistema regionale dei parchi (WMS)</b><br />\
                <img src='https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Asistemaregionaleparchi'></a>",
                params: {
                "LAYERS": "dbu:sistemaregionaleparchi",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Sistema regionale dei parchi (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Asistemaregionaleparchi"></a>',
            popuplayertitle: 'Sistema regionale dei parchi (WMS)',
            permalink: 'SistemaregionaledeiparchiWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_SistemaregionaledeiparchiWMS, 1]);
    lyr_SistemaregionaledeiparchiWMS.setVisible(false);
var lyr_ZPSWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserver/ows",
                attributions: "<a class='legend'><b>ZPS (WMS)</b><br />\
                <img src='https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Azoneprotezionespeciale'></a>",
                params: {
                "LAYERS": "dbu:zoneprotezionespeciale",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">ZPS (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Azoneprotezionespeciale"></a>',
            popuplayertitle: 'ZPS (WMS)',
            permalink: 'ZPSWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_ZPSWMS, 1]);
    lyr_ZPSWMS.setVisible(false);
var lyr_SitidiinteressecomunitarioWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserver/ows",
                attributions: "<a class='legend'><b>Siti di interesse comunitario (WMS)</b><br />\
                <img src='https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Asitiinteressecomunitario'></a>",
                params: {
                "LAYERS": "dbu:sitiinteressecomunitario",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Siti di interesse comunitario (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Asitiinteressecomunitario"></a>',
            popuplayertitle: 'Siti di interesse comunitario (WMS)',
            permalink: 'SitidiinteressecomunitarioWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_SitidiinteressecomunitarioWMS, 1]);
    lyr_SitidiinteressecomunitarioWMS.setVisible(false);
var lyr_OasipermanentidiprotezionefaunisticaWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserver/ows",
                attributions: "<a class='legend'><b>Oasi permanenti di protezione faunistica (WMS)</b><br />\
                <img src='https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Aoasipermanentiprotfaunistica'></a>",
                params: {
                "LAYERS": "dbu:oasipermanentiprotfaunistica",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Oasi permanenti di protezione faunistica (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Aoasipermanentiprotfaunistica"></a>',
            popuplayertitle: 'Oasi permanenti di protezione faunistica (WMS)',
            permalink: 'OasipermanentidiprotezionefaunisticaWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_OasipermanentidiprotezionefaunisticaWMS, 1]);
    lyr_OasipermanentidiprotezionefaunisticaWMS.setVisible(false);
var lyr_AreegestionespecialeenteforesteWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserver/ows",
                attributions: "<a class='legend'><b>Aree gestione speciale ente foreste (WMS)</b><br />\
                <img src='https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Aareegestspecialeenteforeste'></a>",
                params: {
                "LAYERS": "dbu:areegestspecialeenteforeste",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Aree gestione speciale ente foreste (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Aareegestspecialeenteforeste"></a>',
            popuplayertitle: 'Aree gestione speciale ente foreste (WMS)',
            permalink: 'AreegestionespecialeenteforesteWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_AreegestionespecialeenteforesteWMS, 1]);
    lyr_AreegestionespecialeenteforesteWMS.setVisible(false);
var lyr_SalineWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserver/ows",
                attributions: "<a class='legend'><b>Saline (WMS)</b><br />\
                <img src='https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Asaline'></a>",
                params: {
                "LAYERS": "dbu:saline",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Saline (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Asaline"></a>',
            popuplayertitle: 'Saline (WMS)',
            permalink: 'SalineWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_SalineWMS, 1]);
    lyr_SalineWMS.setVisible(false);
var lyr_AreeimpiantieoliciWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserver/ows",
                attributions: "<a class='legend'><b>Aree impianti eolici (WMS)</b><br />\
                <img src='https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Aareeinteressateimpiantieolici'></a>",
                params: {
                "LAYERS": "dbu:areeinteressateimpiantieolici",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Aree impianti eolici (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Aareeinteressateimpiantieolici"></a>',
            popuplayertitle: 'Aree impianti eolici (WMS)',
            permalink: 'AreeimpiantieoliciWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_AreeimpiantieoliciWMS, 1]);
    lyr_AreeimpiantieoliciWMS.setVisible(false);
var lyr_ParchieoliciWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserver/ows",
                attributions: "<a class='legend'><b>Parchi eolici (WMS)</b><br />\
                <img src='https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Aparchieolici'></a>",
                params: {
                "LAYERS": "dbu:parchieolici",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Parchi eolici (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Aparchieolici"></a>',
            popuplayertitle: 'Parchi eolici (WMS)',
            permalink: 'ParchieoliciWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_ParchieoliciWMS, 1]);
    lyr_ParchieoliciWMS.setVisible(false);
var lyr_LineaelettricaWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserver/ows",
                attributions: "<a class='legend'><b>Linea elettrica (WMS)</b><br />\
                <img src='https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Alineaelettrica'></a>",
                params: {
                "LAYERS": "dbu:lineaelettrica",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Linea elettrica (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Alineaelettrica"></a>',
            popuplayertitle: 'Linea elettrica (WMS)',
            permalink: 'LineaelettricaWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_LineaelettricaWMS, 1]);
    lyr_LineaelettricaWMS.setVisible(false);
var lyr_CentraleelettricaWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserver/ows",
                attributions: "<a class='legend'><b>Centrale elettrica (WMS)</b><br />\
                <img src='https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Acentraleelettrica'></a>",
                params: {
                "LAYERS": "dbu:centraleelettrica",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Centrale elettrica (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Acentraleelettrica"></a>',
            popuplayertitle: 'Centrale elettrica (WMS)',
            permalink: 'CentraleelettricaWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_CentraleelettricaWMS, 1]);
    lyr_CentraleelettricaWMS.setVisible(false);
var lyr_CiclodeirifiutiWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserver/ows",
                attributions: "<a class='legend'><b>Ciclo dei rifiuti (WMS)</b><br />\
                <img src='https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Aciclorifiuti'></a>",
                params: {
                "LAYERS": "dbu:ciclorifiuti",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Ciclo dei rifiuti (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Aciclorifiuti"></a>',
            popuplayertitle: 'Ciclo dei rifiuti (WMS)',
            permalink: 'CiclodeirifiutiWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_CiclodeirifiutiWMS, 1]);
    lyr_CiclodeirifiutiWMS.setVisible(false);
var lyr_CondottaidricaWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserver/ows",
                attributions: "<a class='legend'><b>Condotta idrica (WMS)</b><br />\
                <img src='https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Acondottaidrica'></a>",
                params: {
                "LAYERS": "dbu:condottaidrica",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Condotta idrica (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Acondottaidrica"></a>',
            popuplayertitle: 'Condotta idrica (WMS)',
            permalink: 'CondottaidricaWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_CondottaidricaWMS, 1]);
    lyr_CondottaidricaWMS.setVisible(false);
var lyr_DepuratoriWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserver/ows",
                attributions: "<a class='legend'><b>Depuratori (WMS)</b><br />\
                <img src='https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Adepuratori'></a>",
                params: {
                "LAYERS": "dbu:depuratori",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Depuratori (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Adepuratori"></a>',
            popuplayertitle: 'Depuratori (WMS)',
            permalink: 'DepuratoriWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_DepuratoriWMS, 1]);
    lyr_DepuratoriWMS.setVisible(false);
var lyr_RetestradaleWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserver/ows",
                attributions: "<a class='legend'><b>Rete stradale (WMS)</b><br />\
                <img src='https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Aretestradale'></a>",
                params: {
                "LAYERS": "dbu:retestradale",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Rete stradale (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Aretestradale"></a>',
            popuplayertitle: 'Rete stradale (WMS)',
            permalink: 'RetestradaleWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_RetestradaleWMS, 1]);
    lyr_RetestradaleWMS.setVisible(false);
var lyr_ImpiantiferroviarilineariWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserver/ows",
                attributions: "<a class='legend'><b>Impianti ferroviari lineari (WMS)</b><br />\
                <img src='https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Aimpiantiferroviari'></a>",
                params: {
                "LAYERS": "dbu:impiantiferroviari",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Impianti ferroviari lineari (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Aimpiantiferroviari"></a>',
            popuplayertitle: 'Impianti ferroviari lineari (WMS)',
            permalink: 'ImpiantiferroviarilineariWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_ImpiantiferroviarilineariWMS, 1]);
    lyr_ImpiantiferroviarilineariWMS.setVisible(false);
var lyr_NodideitrasportiWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserver/ows",
                attributions: "<a class='legend'><b>Nodi dei trasporti (WMS)</b><br />\
                <img src='https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Anoditrasporti'></a>",
                params: {
                "LAYERS": "dbu:noditrasporti",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Nodi dei trasporti (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Anoditrasporti"></a>',
            popuplayertitle: 'Nodi dei trasporti (WMS)',
            permalink: 'NodideitrasportiWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_NodideitrasportiWMS, 1]);
    lyr_NodideitrasportiWMS.setVisible(false);
var lyr_Benipaesaggisticiexart143CUpgWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserver/ows",
                attributions: "<a class='legend'><b>Beni paesaggistici ex art. 143 CU - pg (WMS)</b><br />\
                <img src='https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Abenipaesaggisticiexart143_plg'></a>",
                params: {
                "LAYERS": "dbu:benipaesaggisticiexart143_plg",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Beni paesaggistici ex art. 143 CU - pg (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Abenipaesaggisticiexart143_plg"></a>',
            popuplayertitle: 'Beni paesaggistici ex art. 143 CU - pg (WMS)',
            permalink: 'Benipaesaggisticiexart143CUpgWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_Benipaesaggisticiexart143CUpgWMS, 1]);
    lyr_Benipaesaggisticiexart143CUpgWMS.setVisible(false);
var lyr_Benipaesaggisticiexart143CUptWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserver/ows",
                attributions: "<a class='legend'><b>Beni paesaggistici ex art. 143 CU - pt (WMS)</b><br />\
                <img src='https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Abenipaesaggisticiexart143_pts'></a>",
                params: {
                "LAYERS": "dbu:benipaesaggisticiexart143_pts",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Beni paesaggistici ex art. 143 CU - pt (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Abenipaesaggisticiexart143_pts"></a>',
            popuplayertitle: 'Beni paesaggistici ex art. 143 CU - pt (WMS)',
            permalink: 'Benipaesaggisticiexart143CUptWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_Benipaesaggisticiexart143CUptWMS, 1]);
    lyr_Benipaesaggisticiexart143CUptWMS.setVisible(false);
var lyr_Benipaesaggisticiexart136142CUptWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserver/ows",
                attributions: "<a class='legend'><b>Beni paesaggistici ex art. 136, 142 CU - pt (WMS)</b><br />\
                <img src='https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Abenipaesaggisticiexart136_142'></a>",
                params: {
                "LAYERS": "dbu:benipaesaggisticiexart136_142",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Beni paesaggistici ex art. 136, 142 CU - pt (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Abenipaesaggisticiexart136_142"></a>',
            popuplayertitle: 'Beni paesaggistici ex art. 136, 142 CU - pt (WMS)',
            permalink: 'Benipaesaggisticiexart136142CUptWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_Benipaesaggisticiexart136142CUptWMS, 1]);
    lyr_Benipaesaggisticiexart136142CUptWMS.setVisible(false);
var lyr_BeniidentitaripuntualiWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserver/ows",
                attributions: "<a class='legend'><b>Beni identitari puntuali (WMS)</b><br />\
                <img src='https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Abeniidentitari'></a>",
                params: {
                "LAYERS": "dbu:beniidentitari",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Beni identitari puntuali (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Abeniidentitari"></a>',
            popuplayertitle: 'Beni identitari puntuali (WMS)',
            permalink: 'BeniidentitaripuntualiWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_BeniidentitaripuntualiWMS, 1]);
    lyr_BeniidentitaripuntualiWMS.setVisible(false);
var lyr_Parchieareeprotettenazionalilqn39491WMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserver/ows",
                attributions: "<a class='legend'><b>Parchi e aree protette nazionali l.q.n. 394-91 (WMS)</b><br />\
                <img src='https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Aparchiareeprotettenazlqn394_91'></a>",
                params: {
                "LAYERS": "dbu:parchiareeprotettenazlqn394_91",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Parchi e aree protette nazionali l.q.n. 394-91 (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Aparchiareeprotettenazlqn394_91"></a>',
            popuplayertitle: 'Parchi e aree protette nazionali l.q.n. 394-91 (WMS)',
            permalink: 'Parchieareeprotettenazionalilqn39491WMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_Parchieareeprotettenazionalilqn39491WMS, 1]);
    lyr_Parchieareeprotettenazionalilqn39491WMS.setVisible(false);
var lyr_VulcaniWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserver/ows",
                attributions: "<a class='legend'><b>Vulcani (WMS)</b><br />\
                <img src='https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Avulcani'></a>",
                params: {
                "LAYERS": "dbu:vulcani",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Vulcani (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Avulcani"></a>',
            popuplayertitle: 'Vulcani (WMS)',
            permalink: 'VulcaniWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_VulcaniWMS, 1]);
    lyr_VulcaniWMS.setVisible(false);
var lyr_SistemiabaieepromontoriscogliepiccoleisolefalesieeversanticostieriWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserver/ows",
                attributions: "<a class='legend'><b>Sistemi a baie e promontori, scogli e piccole isole, falesie e versanti costieri (WMS)</b><br />\
                <img src='https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Asis_baie_prom_scog_isole_fal'></a>",
                params: {
                "LAYERS": "dbu:sis_baie_prom_scog_isole_fal",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Sistemi a baie e promontori, scogli e piccole isole, falesie e versanti costieri (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Asis_baie_prom_scog_isole_fal"></a>',
            popuplayertitle: 'Sistemi a baie e promontori, scogli e piccole isole, falesie e versanti costieri (WMS)',
            permalink: 'SistemiabaieepromontoriscogliepiccoleisolefalesieeversanticostieriWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_SistemiabaieepromontoriscogliepiccoleisolefalesieeversanticostieriWMS, 1]);
    lyr_SistemiabaieepromontoriscogliepiccoleisolefalesieeversanticostieriWMS.setVisible(false);
var lyr_CampidunariesistemidispiaggiaWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserver/ows",
                attributions: "<a class='legend'><b>Campi dunari e sistemi di spiaggia (WMS)</b><br />\
                <img src='https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Acampi_dunari_sist_spiaggia'></a>",
                params: {
                "LAYERS": "dbu:campi_dunari_sist_spiaggia",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Campi dunari e sistemi di spiaggia (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Acampi_dunari_sist_spiaggia"></a>',
            popuplayertitle: 'Campi dunari e sistemi di spiaggia (WMS)',
            permalink: 'CampidunariesistemidispiaggiaWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_CampidunariesistemidispiaggiaWMS, 1]);
    lyr_CampidunariesistemidispiaggiaWMS.setVisible(false);
var lyr_FiumietorrentiarealiWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserver/ows",
                attributions: "<a class='legend'><b>Fiumi e torrenti areali (WMS)</b><br />\
                <img src='https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Afiumitorrenti_plg'></a>",
                params: {
                "LAYERS": "dbu:fiumitorrenti_plg",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Fiumi e torrenti areali (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Afiumitorrenti_plg"></a>',
            popuplayertitle: 'Fiumi e torrenti areali (WMS)',
            permalink: 'FiumietorrentiarealiWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_FiumietorrentiarealiWMS, 1]);
    lyr_FiumietorrentiarealiWMS.setVisible(false);
var lyr_FiumietorrentilineariWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserver/ows",
                attributions: "<a class='legend'><b>Fiumi e torrenti lineari (WMS)</b><br />\
                <img src='https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Afiumitorrenti_arc'></a>",
                params: {
                "LAYERS": "dbu:fiumitorrenti_arc",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Fiumi e torrenti lineari (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Afiumitorrenti_arc"></a>',
            popuplayertitle: 'Fiumi e torrenti lineari (WMS)',
            permalink: 'FiumietorrentilineariWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_FiumietorrentilineariWMS, 1]);
    lyr_FiumietorrentilineariWMS.setVisible(false);
var lyr_LaghiinvasiestagniWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserver/ows",
                attributions: "<a class='legend'><b>Laghi invasi e stagni (WMS)</b><br />\
                <img src='https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Alaghiinvasistagni'></a>",
                params: {
                "LAYERS": "dbu:laghiinvasistagni",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Laghi invasi e stagni (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Alaghiinvasistagni"></a>',
            popuplayertitle: 'Laghi invasi e stagni (WMS)',
            permalink: 'LaghiinvasiestagniWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_LaghiinvasiestagniWMS, 1]);
    lyr_LaghiinvasiestagniWMS.setVisible(false);
var lyr_Areeaquotasuperioreai900mslmWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserver/ows",
                attributions: "<a class='legend'><b>Aree a quota superiore ai 900 m s.l.m.  (WMS)</b><br />\
                <img src='https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Aareequotasuperiore900m'></a>",
                params: {
                "LAYERS": "dbu:areequotasuperiore900m",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Aree a quota superiore ai 900 m s.l.m.  (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Aareequotasuperiore900m"></a>',
            popuplayertitle: 'Aree a quota superiore ai 900 m s.l.m.  (WMS)',
            permalink: 'Areeaquotasuperioreai900mslmWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_Areeaquotasuperioreai900mslmWMS, 1]);
    lyr_Areeaquotasuperioreai900mslmWMS.setVisible(false);
var lyr_AreedinotevoleinteressefaunisticoWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserver/ows",
                attributions: "<a class='legend'><b>Aree di notevole interesse faunistico (WMS)</b><br />\
                <img src='https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Aareeinteressefaunistico'></a>",
                params: {
                "LAYERS": "dbu:areeinteressefaunistico",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Aree di notevole interesse faunistico (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Aareeinteressefaunistico"></a>',
            popuplayertitle: 'Aree di notevole interesse faunistico (WMS)',
            permalink: 'AreedinotevoleinteressefaunisticoWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_AreedinotevoleinteressefaunisticoWMS, 1]);
    lyr_AreedinotevoleinteressefaunisticoWMS.setVisible(false);
var lyr_AreedinotevoleinteressebotanicofitogeograficoWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserver/ows",
                attributions: "<a class='legend'><b>Aree di notevole interesse botanico-fitogeografico (WMS)</b><br />\
                <img src='https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Aareeinteressebotanicofitogeogr'></a>",
                params: {
                "LAYERS": "dbu:areeinteressebotanicofitogeogr",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Aree di notevole interesse botanico-fitogeografico (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Aareeinteressebotanicofitogeogr"></a>',
            popuplayertitle: 'Aree di notevole interesse botanico-fitogeografico (WMS)',
            permalink: 'AreedinotevoleinteressebotanicofitogeograficoWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_AreedinotevoleinteressebotanicofitogeograficoWMS, 1]);
    lyr_AreedinotevoleinteressebotanicofitogeograficoWMS.setVisible(false);
var lyr_Monumentinaturaliistituitilr3189WMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserver/ows",
                attributions: "<a class='legend'><b>Monumenti naturali istituiti l.r. 31-89 (WMS)</b><br />\
                <img src='https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Amonumentinatistituitilr31_89'></a>",
                params: {
                "LAYERS": "dbu:monumentinatistituitilr31_89",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Monumenti naturali istituiti l.r. 31-89 (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Amonumentinatistituitilr31_89"></a>',
            popuplayertitle: 'Monumenti naturali istituiti l.r. 31-89 (WMS)',
            permalink: 'Monumentinaturaliistituitilr3189WMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_Monumentinaturaliistituitilr3189WMS, 1]);
    lyr_Monumentinaturaliistituitilr3189WMS.setVisible(false);
var lyr_GrotteecaverneWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserver/ows",
                attributions: "<a class='legend'><b>Grotte e caverne (WMS)</b><br />\
                <img src='https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Agrottecaverne'></a>",
                params: {
                "LAYERS": "dbu:grottecaverne",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Grotte e caverne (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Agrottecaverne"></a>',
            popuplayertitle: 'Grotte e caverne (WMS)',
            permalink: 'GrotteecaverneWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_GrotteecaverneWMS, 1]);
    lyr_GrotteecaverneWMS.setVisible(false);
var lyr_FasciacostieraWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserver/ows",
                attributions: "<a class='legend'><b>Fascia costiera (WMS)</b><br />\
                <img src='https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Afasciacostiera'></a>",
                params: {
                "LAYERS": "dbu:fasciacostiera",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Fascia costiera (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Afasciacostiera"></a>',
            popuplayertitle: 'Fascia costiera (WMS)',
            permalink: 'FasciacostieraWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_FasciacostieraWMS, 1]);
    lyr_FasciacostieraWMS.setVisible(false);
var lyr_AmbitidipaesaggioWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://webgis.regione.sardegna.it/geoserver/ows",
                attributions: "<a class='legend'><b>Ambiti di paesaggio (WMS)</b><br />\
                <img src='https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Aambitipaesaggio'></a>",
                params: {
                "LAYERS": "dbu:ambitipaesaggio",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Ambiti di paesaggio (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://webgis.regione.sardegna.it/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=dbu%3Aambitipaesaggio"></a>',
            popuplayertitle: 'Ambiti di paesaggio (WMS)',
            permalink: 'AmbitidipaesaggioWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_AmbitidipaesaggioWMS, 1]);
    lyr_AmbitidipaesaggioWMS.setVisible(false);
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
var lyr_ParticelleWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php",
                attributions: "<a class='legend'><b>Particelle (WMS)</b><br />\
                <img src='https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php?language=ita&version=1.3.0&service=WMS&request=GetLegendGraphic&sld_version=1.1.0&layer=CP.CadastralParcel&format=image/png&STYLE=default'></a>",
                params: {
                "LAYERS": "CP.CadastralParcel",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Particelle (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php?language=ita&version=1.3.0&service=WMS&request=GetLegendGraphic&sld_version=1.1.0&layer=CP.CadastralParcel&format=image/png&STYLE=default"></a>',
            popuplayertitle: 'Particelle (WMS)',
            permalink: 'ParticelleWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_ParticelleWMS, 1]);
    lyr_ParticelleWMS.setVisible(false);
var lyr_FabbricatiWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php",
                attributions: "<a class='legend'><b>Fabbricati (WMS)</b><br />\
                <img src='https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php?language=ita&version=1.3.0&service=WMS&request=GetLegendGraphic&sld_version=1.1.0&layer=fabbricati&format=image/png&STYLE=default'></a>",
                params: {
                "LAYERS": "fabbricati",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Fabbricati (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php?language=ita&version=1.3.0&service=WMS&request=GetLegendGraphic&sld_version=1.1.0&layer=fabbricati&format=image/png&STYLE=default"></a>',
            popuplayertitle: 'Fabbricati (WMS)',
            permalink: 'FabbricatiWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_FabbricatiWMS, 1]);
    lyr_FabbricatiWMS.setVisible(false);
var lyr_StradeWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php",
                attributions: "<a class='legend'><b>Strade (WMS)</b><br />\
                <img src='https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php?language=ita&version=1.3.0&service=WMS&request=GetLegendGraphic&sld_version=1.1.0&layer=strade&format=image/png&STYLE=default'></a>",
                params: {
                "LAYERS": "strade",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Strade (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php?language=ita&version=1.3.0&service=WMS&request=GetLegendGraphic&sld_version=1.1.0&layer=strade&format=image/png&STYLE=default"></a>',
            popuplayertitle: 'Strade (WMS)',
            permalink: 'StradeWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_StradeWMS, 1]);
    lyr_StradeWMS.setVisible(false);
var lyr_AcqueWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php",
                attributions: "<a class='legend'><b>Acque (WMS)</b><br />\
                <img src='https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php?language=ita&version=1.3.0&service=WMS&request=GetLegendGraphic&sld_version=1.1.0&layer=acque&format=image/png&STYLE=default'></a>",
                params: {
                "LAYERS": "acque",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Acque (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php?language=ita&version=1.3.0&service=WMS&request=GetLegendGraphic&sld_version=1.1.0&layer=acque&format=image/png&STYLE=default"></a>',
            popuplayertitle: 'Acque (WMS)',
            permalink: 'AcqueWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_AcqueWMS, 1]);
    lyr_AcqueWMS.setVisible(false);
var lyr_MappeWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php",
                attributions: "<a class='legend'><b>Mappe (WMS)</b><br />\
                <img src='https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php?language=ita&version=1.3.0&service=WMS&request=GetLegendGraphic&sld_version=1.1.0&layer=CP.CadastralZoning&format=image/png&STYLE=default'></a>",
                params: {
                "LAYERS": "CP.CadastralZoning",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Mappe (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php?language=ita&version=1.3.0&service=WMS&request=GetLegendGraphic&sld_version=1.1.0&layer=CP.CadastralZoning&format=image/png&STYLE=default"></a>',
            popuplayertitle: 'Mappe (WMS)',
            permalink: 'MappeWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_MappeWMS, 1]);
    lyr_MappeWMS.setVisible(false);
var lyr_VestizioniWMS = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php",
                attributions: "<a class='legend'><b>Vestizioni (WMS)</b><br />\
                <img src='https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php?language=ita&version=1.3.0&service=WMS&request=GetLegendGraphic&sld_version=1.1.0&layer=vestizioni&format=image/png&STYLE=default'></a>",
                params: {
                "LAYERS": "vestizioni",
                "TILED": "true",
                "VERSION": "1.3.0"},
            })),
            title: '<div id="layertitle">Vestizioni (WMS)<br />\
            <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
            <img src="https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php?language=ita&version=1.3.0&service=WMS&request=GetLegendGraphic&sld_version=1.1.0&layer=vestizioni&format=image/png&STYLE=default"></a>',
            popuplayertitle: 'Vestizioni (WMS)',
            permalink: 'VestizioniWMS',
            opacity: 1.000000,
            
            
            });
    wms_layers.push([lyr_VestizioniWMS, 1]);
    lyr_VestizioniWMS.setVisible(false);
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
            maxResolution:0, //0.28004466152261964//
            style: style_Particelle,
            permalink: "Particelle",
            popuplayertitle: 'Particelle',
            interactive: true,
            title: '<img src="styles/legend/Particelle.png" /> Particelle'
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
            minResolution:1.4,
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
            interactive: false,
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
            interactive: false,
            title: '<img src="styles/legend/LimiteComune.png" /> Limite Comune'
            });
var group_CARTOGRAFIAGENERALE = new ol.layer.Group({
                                layers: [lyr_Maschera,lyr_LimiteComune,],
                                openInLayerSwitcher: false,
                                title: 'CARTOGRAFIA GENERALE'});
var group_CATASTO = new ol.layer.Group({
                                layers: [lyr_Particelle,lyr_Mappe,],
                                openInLayerSwitcher: false,
                                title: 'CATASTO'});
var group_CATASTOWMS = new ol.layer.Group({
                                layers: [lyr_ParticelleWMS,lyr_FabbricatiWMS,lyr_StradeWMS,lyr_AcqueWMS,lyr_MappeWMS,lyr_VestizioniWMS,],
                                openInLayerSwitcher: false,
                                title: 'CATASTO (WMS)'});
var group_PIANOURBANISTICOCOMUNALE = new ol.layer.Group({
                                layers: [lyr_PianoUrbanisticoComunale,],
                                openInLayerSwitcher: false,
                                title: 'PIANO URBANISTICO COMUNALE'});
var group_PPRAMBITIDIPAESAGGIOWMS = new ol.layer.Group({
                                layers: [lyr_AmbitidipaesaggioWMS,],
                                openInLayerSwitcher: false,
                                title: 'PPR - AMBITI DI PAESAGGIO (WMS)'});
var group_PPRBENIPAESAGGISTICI143WMS = new ol.layer.Group({
                                layers: [lyr_SistemiabaieepromontoriscogliepiccoleisolefalesieeversanticostieriWMS,lyr_CampidunariesistemidispiaggiaWMS,lyr_FiumietorrentiarealiWMS,lyr_FiumietorrentilineariWMS,lyr_LaghiinvasiestagniWMS,lyr_Areeaquotasuperioreai900mslmWMS,lyr_AreedinotevoleinteressefaunisticoWMS,lyr_AreedinotevoleinteressebotanicofitogeograficoWMS,lyr_Monumentinaturaliistituitilr3189WMS,lyr_GrotteecaverneWMS,lyr_FasciacostieraWMS,],
                                openInLayerSwitcher: false,
                                title: 'PPR - BENI PAESAGGISTICI 143 (WMS)'});
var group_PPRBENIPAESAGGISTICI142WMS = new ol.layer.Group({
                                layers: [lyr_Parchieareeprotettenazionalilqn39491WMS,lyr_VulcaniWMS,],
                                openInLayerSwitcher: false,
                                title: 'PPR - BENI PAESAGGISTICI 142 (WMS)'});
var group_PPRBENIPAESAGGISTICIEBENIIDENTITARIWMS = new ol.layer.Group({
                                layers: [lyr_Benipaesaggisticiexart143CUpgWMS,lyr_Benipaesaggisticiexart143CUptWMS,lyr_Benipaesaggisticiexart136142CUptWMS,lyr_BeniidentitaripuntualiWMS,],
                                openInLayerSwitcher: false,
                                title: 'PPR - BENI PAESAGGISTICI E BENI IDENTITARI (WMS)'});
var group_PPRRETIINFRASTRUTTUREWMS = new ol.layer.Group({
                                layers: [lyr_SalineWMS,lyr_AreeimpiantieoliciWMS,lyr_ParchieoliciWMS,lyr_LineaelettricaWMS,lyr_CentraleelettricaWMS,lyr_CiclodeirifiutiWMS,lyr_CondottaidricaWMS,lyr_DepuratoriWMS,lyr_RetestradaleWMS,lyr_ImpiantiferroviarilineariWMS,lyr_NodideitrasportiWMS,],
                                openInLayerSwitcher: false,
                                title: 'PPR - RETI INFRASTRUTTURE (WMS)'});
var group_PPRAREEDIINTERESSENATURALISTICOISTITUZIONALMENTETUTELATEWMS = new ol.layer.Group({
                                layers: [lyr_SistemaregionaledeiparchiWMS,lyr_ZPSWMS,lyr_SitidiinteressecomunitarioWMS,lyr_OasipermanentidiprotezionefaunisticaWMS,lyr_AreegestionespecialeenteforesteWMS,],
                                openInLayerSwitcher: false,
                                title: 'PPR - AREE DI INTERESSE NATURALISTICO ISTITUZIONALMENTE TUTELATE (WMS)'});
var group_PPRAREERECUPEROAMBIENTALEWMS = new ol.layer.Group({
                                layers: [lyr_ScaviWMS,lyr_DiscaricheWMS,lyr_AreeminerariedismesseWMS,lyr_SitiinquinatiWMS,],
                                openInLayerSwitcher: false,
                                title: 'PPR - AREE RECUPERO AMBIENTALE (WMS)'});
var group_PPRCOMPONENTIASSETTOINSEDIATIVOWMS = new ol.layer.Group({
                                layers: [lyr_ComponentiassettoinsediativoCWMS,lyr_ComponentiassettoinsediativoBWMS,lyr_ComponentiassettoinsediativoAWMS,lyr_GrandiareeindustrialiWMS,lyr_EdificatoCTRWMS,],
                                openInLayerSwitcher: false,
                                title: 'PPR - COMPONENTI ASSETTO INSEDIATIVO (WMS)'});
var group_PPRCOMPONENTIASSETTOAMBIENTALEWMS = new ol.layer.Group({
                                layers: [lyr_ComponentidipaesaggioWMS,],
                                openInLayerSwitcher: false,
                                title: 'PPR - COMPONENTI ASSETTO AMBIENTALE (WMS)'});
var group_DLGSN422004ART142WMS = new ol.layer.Group({
                                layers: [lyr_Art142VulcanidatiindicativiWMS,lyr_Art142Fasciadi150mdaifiumidatiindicativiWMS,lyr_Art142FiumitorrenticorsidacquadatiindicativiWMS,lyr_Art142Territoricostierifascia300metridatiindicativiWMS,],
                                openInLayerSwitcher: false,
                                title: 'D.LGS. N 42/2004 - ART 142 (WMS)'});
var group_PAIPGRAPSFFREVISIONE2023WMS = new ol.layer.Group({
                                layers: [lyr_RischiogeomorfologicoWMS,lyr_RischioidraulicoWMS,lyr_DannopotenzialeWMS,lyr_PericologeomorfologicoWMS,lyr_PericoloidraulicoWMS,],
                                openInLayerSwitcher: false,
                                title: 'PAI-PGRA-PSFF - REVISIONE 2023 (WMS)'});
var group_AREEPERCORSEDALFUOCO2024WMS = new ol.layer.Group({
                                layers: [lyr_PerimetrideisoprassuolipercorsidalfuocoWMS,],
                                openInLayerSwitcher: false,
                                title: 'AREE PERCORSE DAL FUOCO 2024 (WMS)'});
var group_USICIVICI = new ol.layer.Group({
                                layers: [lyr_Usicivici,],
                                openInLayerSwitcher: false,
                                title: 'USI CIVICI'});
var group_BASEMAP = new ol.layer.Group({
                                layers: [lyr_Sfondobianco,lyr_OSMStandard,lyr_GoogleHybrid,lyr_GoogleSatellite,lyr_Ortofoto2019,],
                                openInLayerSwitcher: false,
                                title: 'BASEMAP'});

lyr_Sfondobianco.setVisible(false);lyr_OSMStandard.setVisible(false);lyr_GoogleHybrid.setVisible(false);lyr_GoogleSatellite.setVisible(true);lyr_Ortofoto2019.setVisible(false);lyr_Usicivici.setVisible(false);lyr_PerimetrideisoprassuolipercorsidalfuocoWMS.setVisible(false);lyr_RischiogeomorfologicoWMS.setVisible(false);lyr_RischioidraulicoWMS.setVisible(false);lyr_DannopotenzialeWMS.setVisible(false);lyr_PericologeomorfologicoWMS.setVisible(false);lyr_PericoloidraulicoWMS.setVisible(false);lyr_Art142VulcanidatiindicativiWMS.setVisible(false);lyr_Art142Fasciadi150mdaifiumidatiindicativiWMS.setVisible(false);lyr_Art142FiumitorrenticorsidacquadatiindicativiWMS.setVisible(false);lyr_Art142Territoricostierifascia300metridatiindicativiWMS.setVisible(false);lyr_ComponentidipaesaggioWMS.setVisible(false);lyr_ComponentiassettoinsediativoCWMS.setVisible(false);lyr_ComponentiassettoinsediativoBWMS.setVisible(false);lyr_ComponentiassettoinsediativoAWMS.setVisible(false);lyr_GrandiareeindustrialiWMS.setVisible(false);lyr_EdificatoCTRWMS.setVisible(false);lyr_ScaviWMS.setVisible(false);lyr_DiscaricheWMS.setVisible(false);lyr_AreeminerariedismesseWMS.setVisible(false);lyr_SitiinquinatiWMS.setVisible(false);lyr_SistemaregionaledeiparchiWMS.setVisible(false);lyr_ZPSWMS.setVisible(false);lyr_SitidiinteressecomunitarioWMS.setVisible(false);lyr_OasipermanentidiprotezionefaunisticaWMS.setVisible(false);lyr_AreegestionespecialeenteforesteWMS.setVisible(false);lyr_SalineWMS.setVisible(false);lyr_AreeimpiantieoliciWMS.setVisible(false);lyr_ParchieoliciWMS.setVisible(false);lyr_LineaelettricaWMS.setVisible(false);lyr_CentraleelettricaWMS.setVisible(false);lyr_CiclodeirifiutiWMS.setVisible(false);lyr_CondottaidricaWMS.setVisible(false);lyr_DepuratoriWMS.setVisible(false);lyr_RetestradaleWMS.setVisible(false);lyr_ImpiantiferroviarilineariWMS.setVisible(false);lyr_NodideitrasportiWMS.setVisible(false);lyr_Benipaesaggisticiexart143CUpgWMS.setVisible(false);lyr_Benipaesaggisticiexart143CUptWMS.setVisible(false);lyr_Benipaesaggisticiexart136142CUptWMS.setVisible(false);lyr_BeniidentitaripuntualiWMS.setVisible(false);lyr_Parchieareeprotettenazionalilqn39491WMS.setVisible(false);lyr_VulcaniWMS.setVisible(false);lyr_SistemiabaieepromontoriscogliepiccoleisolefalesieeversanticostieriWMS.setVisible(false);lyr_CampidunariesistemidispiaggiaWMS.setVisible(false);lyr_FiumietorrentiarealiWMS.setVisible(false);lyr_FiumietorrentilineariWMS.setVisible(false);lyr_LaghiinvasiestagniWMS.setVisible(false);lyr_Areeaquotasuperioreai900mslmWMS.setVisible(false);lyr_AreedinotevoleinteressefaunisticoWMS.setVisible(false);lyr_AreedinotevoleinteressebotanicofitogeograficoWMS.setVisible(false);lyr_Monumentinaturaliistituitilr3189WMS.setVisible(false);lyr_GrotteecaverneWMS.setVisible(false);lyr_FasciacostieraWMS.setVisible(false);lyr_AmbitidipaesaggioWMS.setVisible(false);lyr_PianoUrbanisticoComunale.setVisible(false);lyr_ParticelleWMS.setVisible(false);lyr_FabbricatiWMS.setVisible(false);lyr_StradeWMS.setVisible(false);lyr_AcqueWMS.setVisible(false);lyr_MappeWMS.setVisible(false);lyr_VestizioniWMS.setVisible(false);lyr_Particelle.setVisible(false);lyr_Mappe.setVisible(false);lyr_Maschera.setVisible(true);lyr_LimiteComune.setVisible(true);
var layersList = [group_BASEMAP,group_USICIVICI,group_AREEPERCORSEDALFUOCO2024WMS,group_PAIPGRAPSFFREVISIONE2023WMS,group_DLGSN422004ART142WMS,group_PPRCOMPONENTIASSETTOAMBIENTALEWMS,group_PPRCOMPONENTIASSETTOINSEDIATIVOWMS,group_PPRAREERECUPEROAMBIENTALEWMS,group_PPRAREEDIINTERESSENATURALISTICOISTITUZIONALMENTETUTELATEWMS,group_PPRRETIINFRASTRUTTUREWMS,group_PPRBENIPAESAGGISTICIEBENIIDENTITARIWMS,group_PPRBENIPAESAGGISTICI142WMS,group_PPRBENIPAESAGGISTICI143WMS,group_PPRAMBITIDIPAESAGGIOWMS,group_PIANOURBANISTICOCOMUNALE,group_CATASTOWMS,group_CATASTO,group_CARTOGRAFIAGENERALE];
lyr_Sfondobianco.set('fieldAliases', {'FID': 'FID', });
lyr_Usicivici.set('fieldAliases', {'ClassID': 'ClassID', 'Zona': 'Zona', });
lyr_PianoUrbanisticoComunale.set('fieldAliases', {'ClassID': 'ClassID', 'Zona': 'Zona', });
lyr_Particelle.set('fieldAliases', {'LABEL': 'LABEL', 'MAPPA': 'MAPPA', 'CODE': 'CODE', 'PPR_AMB_PA': 'PPR_AMB_PA', 'PAI_PI': 'PAI_PI', 'PAI_PG': 'PAI_PG', 'PAI_DP': 'PAI_DP', 'PAI_RI': 'PAI_RI', 'PAI_RG': 'PAI_RG', 'CDU': 'CDU', 'LINK': 'LINK', });
lyr_Mappe.set('fieldAliases', {'INSPIREID_': 'INSPIREID_', 'INSPIREI_1': 'INSPIREI_1', 'LABEL': 'LABEL', 'NATIONALCA': 'NATIONALCA', 'BEGINLIFES': 'BEGINLIFES', 'ENDLIFESPA': 'ENDLIFESPA', 'LEVEL': 'LEVEL', 'LEVELNAME': 'LEVELNAME', 'LEVELNAME_': 'LEVELNAME_', 'ORIGINALMA': 'ORIGINALMA', 'ADMINISTRA': 'ADMINISTRA', });
lyr_Maschera.set('fieldAliases', {'FID': 'FID', });
lyr_LimiteComune.set('fieldAliases', {'ClassID': 'ClassID', 'AVDICM': 'AVDICM', 'MNDICM': 'MNDICM', 'CIstat': 'CIstat', 'CBelfiore': 'CBelfiore', 'Nome': 'Nome', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Determina': 'Determina', 'Note': 'Note', });
lyr_Sfondobianco.set('fieldImages', {'FID': '', });
lyr_Usicivici.set('fieldImages', {'ClassID': '', 'Zona': '', });
lyr_PianoUrbanisticoComunale.set('fieldImages', {'ClassID': '', 'Zona': '', });
lyr_Particelle.set('fieldImages', {'LABEL': 'TextEdit', 'MAPPA': 'TextEdit', 'CODE': 'TextEdit', 'PPR_AMB_PA': 'TextEdit', 'PAI_PI': 'TextEdit', 'PAI_PG': 'TextEdit', 'PAI_DP': 'TextEdit', 'PAI_RI': 'TextEdit', 'PAI_RG': 'TextEdit', 'CDU': 'TextEdit', 'LINK': 'TextEdit', });
lyr_Mappe.set('fieldImages', {'INSPIREID_': '', 'INSPIREI_1': '', 'LABEL': '', 'NATIONALCA': '', 'BEGINLIFES': '', 'ENDLIFESPA': '', 'LEVEL': '', 'LEVELNAME': '', 'LEVELNAME_': '', 'ORIGINALMA': '', 'ADMINISTRA': '', });
lyr_Maschera.set('fieldImages', {'FID': '', });
lyr_LimiteComune.set('fieldImages', {'ClassID': '', 'AVDICM': '', 'MNDICM': '', 'CIstat': '', 'CBelfiore': '', 'Nome': '', 'Shape_Leng': '', 'Shape_Area': '', 'Determina': '', 'Note': '', });
lyr_Sfondobianco.set('fieldLabels', {'FID': 'no label', });
lyr_Usicivici.set('fieldLabels', {'ClassID': 'no label', 'Zona': 'no label', });
lyr_PianoUrbanisticoComunale.set('fieldLabels', {'ClassID': 'no label', 'Zona': 'no label', });
lyr_Particelle.set('fieldLabels', {'LABEL': 'no label', 'MAPPA': 'no label', 'CODE': 'no label', 'PPR_AMB_PA': 'no label', 'PAI_PI': 'no label', 'PAI_PG': 'no label', 'PAI_DP': 'no label', 'PAI_RI': 'no label', 'PAI_RG': 'no label', 'CDU': 'no label', 'LINK': 'no label', });
lyr_Mappe.set('fieldLabels', {'INSPIREID_': 'no label', 'INSPIREI_1': 'no label', 'LABEL': 'no label', 'NATIONALCA': 'no label', 'BEGINLIFES': 'no label', 'ENDLIFESPA': 'no label', 'LEVEL': 'no label', 'LEVELNAME': 'no label', 'LEVELNAME_': 'no label', 'ORIGINALMA': 'no label', 'ADMINISTRA': 'no label', });
lyr_Maschera.set('fieldLabels', {'FID': 'no label', });
lyr_LimiteComune.set('fieldLabels', {'ClassID': 'no label', 'AVDICM': 'no label', 'MNDICM': 'no label', 'CIstat': 'no label', 'CBelfiore': 'no label', 'Nome': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Determina': 'no label', 'Note': 'no label', });
lyr_LimiteComune.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});