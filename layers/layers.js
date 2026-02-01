var wms_layers = [];

var lyr_ORTO_2024_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.geo.euskadi.eus/WMS_ORTOARGAZKIAK",
                              attributions: ' ',
                              params: {
                                "LAYERS": "ORTO_2024",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'ORTO_2024',
                            popuplayertitle: 'ORTO_2024',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_ORTO_2024_0, 0]);

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Lnea3_2 = new ol.format.GeoJSON();
var features_Lnea3_2 = format_Lnea3_2.readFeatures(json_Lnea3_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lnea3_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lnea3_2.addFeatures(features_Lnea3_2);
var lyr_Lnea3_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lnea3_2, 
                style: style_Lnea3_2,
                popuplayertitle: 'Línea 3',
                interactive: false,
                title: '<img src="styles/legend/Lnea3_2.png" /> Línea 3'
            });
var format_Lnea2_3 = new ol.format.GeoJSON();
var features_Lnea2_3 = format_Lnea2_3.readFeatures(json_Lnea2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lnea2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lnea2_3.addFeatures(features_Lnea2_3);
var lyr_Lnea2_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lnea2_3, 
                style: style_Lnea2_3,
                popuplayertitle: 'Línea 2 ',
                interactive: false,
                title: '<img src="styles/legend/Lnea2_3.png" /> Línea 2 '
            });
var format_Lnea1_4 = new ol.format.GeoJSON();
var features_Lnea1_4 = format_Lnea1_4.readFeatures(json_Lnea1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lnea1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lnea1_4.addFeatures(features_Lnea1_4);
var lyr_Lnea1_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lnea1_4, 
                style: style_Lnea1_4,
                popuplayertitle: 'Línea 1',
                interactive: false,
                title: '<img src="styles/legend/Lnea1_4.png" /> Línea 1'
            });
var format_TramoL1L2_5 = new ol.format.GeoJSON();
var features_TramoL1L2_5 = format_TramoL1L2_5.readFeatures(json_TramoL1L2_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TramoL1L2_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TramoL1L2_5.addFeatures(features_TramoL1L2_5);
var lyr_TramoL1L2_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TramoL1L2_5, 
                style: style_TramoL1L2_5,
                popuplayertitle: 'Tramo L1-L2',
                interactive: false,
    title: 'Tramo L1-L2<br />\
    <img src="styles/legend/TramoL1L2_5_0.png" /> L1<br />\
    <img src="styles/legend/TramoL1L2_5_1.png" /> L2<br />' });
var format_Restodeaccesos_6 = new ol.format.GeoJSON();
var features_Restodeaccesos_6 = format_Restodeaccesos_6.readFeatures(json_Restodeaccesos_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Restodeaccesos_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Restodeaccesos_6.addFeatures(features_Restodeaccesos_6);
var lyr_Restodeaccesos_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Restodeaccesos_6, 
                style: style_Restodeaccesos_6,
                popuplayertitle: 'Resto de accesos',
                interactive: true,
                title: '<img src="styles/legend/Restodeaccesos_6.png" /> Resto de accesos'
            });
var format_Accesostipofosterazo_7 = new ol.format.GeoJSON();
var features_Accesostipofosterazo_7 = format_Accesostipofosterazo_7.readFeatures(json_Accesostipofosterazo_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Accesostipofosterazo_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Accesostipofosterazo_7.addFeatures(features_Accesostipofosterazo_7);
var lyr_Accesostipofosterazo_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Accesostipofosterazo_7, 
                style: style_Accesostipofosterazo_7,
                popuplayertitle: 'Accesos tipo fosterazo',
                interactive: true,
                title: '<img src="styles/legend/Accesostipofosterazo_7.png" /> Accesos tipo fosterazo'
            });
var format_ElfosterazoSarriko_8 = new ol.format.GeoJSON();
var features_ElfosterazoSarriko_8 = format_ElfosterazoSarriko_8.readFeatures(json_ElfosterazoSarriko_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ElfosterazoSarriko_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ElfosterazoSarriko_8.addFeatures(features_ElfosterazoSarriko_8);
var lyr_ElfosterazoSarriko_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ElfosterazoSarriko_8, 
                style: style_ElfosterazoSarriko_8,
                popuplayertitle: 'El fosterazo (Sarriko)',
                interactive: true,
                title: '<img src="styles/legend/ElfosterazoSarriko_8.png" /> El fosterazo (Sarriko)'
            });
var format_Accesostipofosterito_9 = new ol.format.GeoJSON();
var features_Accesostipofosterito_9 = format_Accesostipofosterito_9.readFeatures(json_Accesostipofosterito_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Accesostipofosterito_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Accesostipofosterito_9.addFeatures(features_Accesostipofosterito_9);
var lyr_Accesostipofosterito_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Accesostipofosterito_9, 
                style: style_Accesostipofosterito_9,
                popuplayertitle: 'Accesos tipo fosterito',
                interactive: true,
                title: '<img src="styles/legend/Accesostipofosterito_9.png" /> Accesos tipo fosterito'
            });

lyr_ORTO_2024_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_Lnea3_2.setVisible(true);lyr_Lnea2_3.setVisible(true);lyr_Lnea1_4.setVisible(true);lyr_TramoL1L2_5.setVisible(true);lyr_Restodeaccesos_6.setVisible(true);lyr_Accesostipofosterazo_7.setVisible(true);lyr_ElfosterazoSarriko_8.setVisible(true);lyr_Accesostipofosterito_9.setVisible(true);
var layersList = [lyr_ORTO_2024_0,lyr_OpenStreetMap_1,lyr_Lnea3_2,lyr_Lnea2_3,lyr_Lnea1_4,lyr_TramoL1L2_5,lyr_Restodeaccesos_6,lyr_Accesostipofosterazo_7,lyr_ElfosterazoSarriko_8,lyr_Accesostipofosterito_9];
lyr_Lnea3_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID_TIPO': 'ID_TIPO', 'COMPONEN1D': 'COMPONEN1D', 'SITUACION': 'SITUACION', 'ESTADO': 'ESTADO', 'CODIGOF': 'CODIGOF', 'COMPE_0035': 'COMPE_0035', 'ELECT_0035': 'ELECT_0035', 'TITUL_0035': 'TITUL_0035', 'ANCHO_0036': 'ANCHO_0036', 'NVIAS_0036': 'NVIAS_0036', 'VELOC_0036': 'VELOC_0036', 'IDIOMA': 'IDIOMA', 'NOMBRE': 'NOMBRE', 'IDTOPONIMO': 'IDTOPONIMO', 'NVIAS_0038': 'NVIAS_0038', 'NVIAS_0040': 'NVIAS_0040', 'USO_VIA': 'USO_VIA', 'LEYENDA_1': 'LEYENDA_1', 'LEGENDA_1': 'LEGENDA_1', 'LEY_SIMP_1': 'LEY_SIMP_1', 'LEG_SINP_1': 'LEG_SINP_1', 'NOMBRE_2': 'NOMBRE_2', 'Shape_Leng': 'Shape_Leng', });
lyr_Lnea2_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID_TIPO': 'ID_TIPO', 'COMPONEN1D': 'COMPONEN1D', 'SITUACION': 'SITUACION', 'ESTADO': 'ESTADO', 'CODIGOF': 'CODIGOF', 'COMPE_0035': 'COMPE_0035', 'ELECT_0035': 'ELECT_0035', 'TITUL_0035': 'TITUL_0035', 'ANCHO_0036': 'ANCHO_0036', 'NVIAS_0036': 'NVIAS_0036', 'VELOC_0036': 'VELOC_0036', 'IDIOMA': 'IDIOMA', 'NOMBRE': 'NOMBRE', 'IDTOPONIMO': 'IDTOPONIMO', 'NVIAS_0038': 'NVIAS_0038', 'NVIAS_0040': 'NVIAS_0040', 'USO_VIA': 'USO_VIA', 'LEYENDA_1': 'LEYENDA_1', 'LEGENDA_1': 'LEGENDA_1', 'LEY_SIMP_1': 'LEY_SIMP_1', 'LEG_SINP_1': 'LEG_SINP_1', 'NOMBRE_2': 'NOMBRE_2', 'Shape_Leng': 'Shape_Leng', });
lyr_Lnea1_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID_TIPO': 'ID_TIPO', 'COMPONEN1D': 'COMPONEN1D', 'SITUACION': 'SITUACION', 'ESTADO': 'ESTADO', 'CODIGOF': 'CODIGOF', 'COMPE_0035': 'COMPE_0035', 'ELECT_0035': 'ELECT_0035', 'TITUL_0035': 'TITUL_0035', 'ANCHO_0036': 'ANCHO_0036', 'NVIAS_0036': 'NVIAS_0036', 'VELOC_0036': 'VELOC_0036', 'IDIOMA': 'IDIOMA', 'NOMBRE': 'NOMBRE', 'IDTOPONIMO': 'IDTOPONIMO', 'NVIAS_0038': 'NVIAS_0038', 'NVIAS_0040': 'NVIAS_0040', 'USO_VIA': 'USO_VIA', 'LEYENDA_1': 'LEYENDA_1', 'LEGENDA_1': 'LEGENDA_1', 'LEY_SIMP_1': 'LEY_SIMP_1', 'LEG_SINP_1': 'LEG_SINP_1', 'NOMBRE_2': 'NOMBRE_2', 'Shape_Leng': 'Shape_Leng', });
lyr_TramoL1L2_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID_TIPO': 'ID_TIPO', 'COMPONEN1D': 'COMPONEN1D', 'SITUACION': 'SITUACION', 'ESTADO': 'ESTADO', 'CODIGOF': 'CODIGOF', 'COMPE_0035': 'COMPE_0035', 'ELECT_0035': 'ELECT_0035', 'TITUL_0035': 'TITUL_0035', 'ANCHO_0036': 'ANCHO_0036', 'NVIAS_0036': 'NVIAS_0036', 'VELOC_0036': 'VELOC_0036', 'IDIOMA': 'IDIOMA', 'NOMBRE': 'NOMBRE', 'IDTOPONIMO': 'IDTOPONIMO', 'NVIAS_0038': 'NVIAS_0038', 'NVIAS_0040': 'NVIAS_0040', 'USO_VIA': 'USO_VIA', 'LEYENDA_1': 'LEYENDA_1', 'LEGENDA_1': 'LEGENDA_1', 'LEY_SIMP_1': 'LEY_SIMP_1', 'LEG_SINP_1': 'LEG_SINP_1', 'NOMBRE_2': 'NOMBRE_2', 'Shape_Leng': 'Shape_Leng', 'LINEA': 'LINEA', 'layer': 'layer', 'path': 'path', });
lyr_Restodeaccesos_6.set('fieldAliases', {'fid': 'fid', 'Parada': 'Parada', 'Ubicación': 'Ubicación', });
lyr_Accesostipofosterazo_7.set('fieldAliases', {'fid': 'fid', 'Parada': 'Parada', 'Ubicación': 'Ubicación', });
lyr_ElfosterazoSarriko_8.set('fieldAliases', {'fid': 'fid', 'Ubicación': 'Ubicación', 'Parada': 'Parada', });
lyr_Accesostipofosterito_9.set('fieldAliases', {'fid': 'fid', 'Parada': 'Parada', 'Ubicación': 'Ubicación', });
lyr_Lnea3_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ID_TIPO': 'TextEdit', 'COMPONEN1D': 'TextEdit', 'SITUACION': 'TextEdit', 'ESTADO': 'TextEdit', 'CODIGOF': 'TextEdit', 'COMPE_0035': 'TextEdit', 'ELECT_0035': 'TextEdit', 'TITUL_0035': 'TextEdit', 'ANCHO_0036': 'TextEdit', 'NVIAS_0036': 'TextEdit', 'VELOC_0036': 'TextEdit', 'IDIOMA': 'TextEdit', 'NOMBRE': 'TextEdit', 'IDTOPONIMO': 'TextEdit', 'NVIAS_0038': 'TextEdit', 'NVIAS_0040': 'TextEdit', 'USO_VIA': 'TextEdit', 'LEYENDA_1': 'TextEdit', 'LEGENDA_1': 'TextEdit', 'LEY_SIMP_1': 'TextEdit', 'LEG_SINP_1': 'TextEdit', 'NOMBRE_2': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Lnea2_3.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ID_TIPO': 'TextEdit', 'COMPONEN1D': 'TextEdit', 'SITUACION': 'TextEdit', 'ESTADO': 'TextEdit', 'CODIGOF': 'TextEdit', 'COMPE_0035': 'TextEdit', 'ELECT_0035': 'TextEdit', 'TITUL_0035': 'TextEdit', 'ANCHO_0036': 'TextEdit', 'NVIAS_0036': 'TextEdit', 'VELOC_0036': 'TextEdit', 'IDIOMA': 'TextEdit', 'NOMBRE': 'TextEdit', 'IDTOPONIMO': 'TextEdit', 'NVIAS_0038': 'TextEdit', 'NVIAS_0040': 'TextEdit', 'USO_VIA': 'TextEdit', 'LEYENDA_1': 'TextEdit', 'LEGENDA_1': 'TextEdit', 'LEY_SIMP_1': 'TextEdit', 'LEG_SINP_1': 'TextEdit', 'NOMBRE_2': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Lnea1_4.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ID_TIPO': 'TextEdit', 'COMPONEN1D': 'TextEdit', 'SITUACION': 'TextEdit', 'ESTADO': 'TextEdit', 'CODIGOF': 'TextEdit', 'COMPE_0035': 'TextEdit', 'ELECT_0035': 'TextEdit', 'TITUL_0035': 'TextEdit', 'ANCHO_0036': 'TextEdit', 'NVIAS_0036': 'TextEdit', 'VELOC_0036': 'TextEdit', 'IDIOMA': 'TextEdit', 'NOMBRE': 'TextEdit', 'IDTOPONIMO': 'TextEdit', 'NVIAS_0038': 'TextEdit', 'NVIAS_0040': 'TextEdit', 'USO_VIA': 'TextEdit', 'LEYENDA_1': 'TextEdit', 'LEGENDA_1': 'TextEdit', 'LEY_SIMP_1': 'TextEdit', 'LEG_SINP_1': 'TextEdit', 'NOMBRE_2': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_TramoL1L2_5.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ID_TIPO': 'TextEdit', 'COMPONEN1D': 'TextEdit', 'SITUACION': 'TextEdit', 'ESTADO': 'TextEdit', 'CODIGOF': 'TextEdit', 'COMPE_0035': 'TextEdit', 'ELECT_0035': 'TextEdit', 'TITUL_0035': 'TextEdit', 'ANCHO_0036': 'TextEdit', 'NVIAS_0036': 'TextEdit', 'VELOC_0036': 'TextEdit', 'IDIOMA': 'TextEdit', 'NOMBRE': 'TextEdit', 'IDTOPONIMO': 'TextEdit', 'NVIAS_0038': 'TextEdit', 'NVIAS_0040': 'TextEdit', 'USO_VIA': 'TextEdit', 'LEYENDA_1': 'TextEdit', 'LEGENDA_1': 'TextEdit', 'LEY_SIMP_1': 'TextEdit', 'LEG_SINP_1': 'TextEdit', 'NOMBRE_2': 'TextEdit', 'Shape_Leng': 'TextEdit', 'LINEA': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Restodeaccesos_6.set('fieldImages', {'fid': 'TextEdit', 'Parada': '', 'Ubicación': '', });
lyr_Accesostipofosterazo_7.set('fieldImages', {'fid': 'TextEdit', 'Parada': '', 'Ubicación': '', });
lyr_ElfosterazoSarriko_8.set('fieldImages', {'fid': 'TextEdit', 'Ubicación': '', 'Parada': '', });
lyr_Accesostipofosterito_9.set('fieldImages', {'fid': 'TextEdit', 'Parada': '', 'Ubicación': '', });
lyr_Lnea3_2.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ID_TIPO': 'no label', 'COMPONEN1D': 'no label', 'SITUACION': 'no label', 'ESTADO': 'no label', 'CODIGOF': 'no label', 'COMPE_0035': 'no label', 'ELECT_0035': 'no label', 'TITUL_0035': 'no label', 'ANCHO_0036': 'no label', 'NVIAS_0036': 'no label', 'VELOC_0036': 'no label', 'IDIOMA': 'no label', 'NOMBRE': 'no label', 'IDTOPONIMO': 'no label', 'NVIAS_0038': 'no label', 'NVIAS_0040': 'no label', 'USO_VIA': 'no label', 'LEYENDA_1': 'no label', 'LEGENDA_1': 'no label', 'LEY_SIMP_1': 'no label', 'LEG_SINP_1': 'no label', 'NOMBRE_2': 'no label', 'Shape_Leng': 'no label', });
lyr_Lnea2_3.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ID_TIPO': 'no label', 'COMPONEN1D': 'no label', 'SITUACION': 'no label', 'ESTADO': 'no label', 'CODIGOF': 'no label', 'COMPE_0035': 'no label', 'ELECT_0035': 'no label', 'TITUL_0035': 'no label', 'ANCHO_0036': 'no label', 'NVIAS_0036': 'no label', 'VELOC_0036': 'no label', 'IDIOMA': 'no label', 'NOMBRE': 'no label', 'IDTOPONIMO': 'no label', 'NVIAS_0038': 'no label', 'NVIAS_0040': 'no label', 'USO_VIA': 'no label', 'LEYENDA_1': 'no label', 'LEGENDA_1': 'no label', 'LEY_SIMP_1': 'no label', 'LEG_SINP_1': 'no label', 'NOMBRE_2': 'no label', 'Shape_Leng': 'no label', });
lyr_Lnea1_4.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ID_TIPO': 'no label', 'COMPONEN1D': 'no label', 'SITUACION': 'no label', 'ESTADO': 'no label', 'CODIGOF': 'no label', 'COMPE_0035': 'no label', 'ELECT_0035': 'no label', 'TITUL_0035': 'no label', 'ANCHO_0036': 'no label', 'NVIAS_0036': 'no label', 'VELOC_0036': 'no label', 'IDIOMA': 'no label', 'NOMBRE': 'no label', 'IDTOPONIMO': 'no label', 'NVIAS_0038': 'no label', 'NVIAS_0040': 'no label', 'USO_VIA': 'no label', 'LEYENDA_1': 'no label', 'LEGENDA_1': 'no label', 'LEY_SIMP_1': 'no label', 'LEG_SINP_1': 'no label', 'NOMBRE_2': 'no label', 'Shape_Leng': 'no label', });
lyr_TramoL1L2_5.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ID_TIPO': 'no label', 'COMPONEN1D': 'no label', 'SITUACION': 'no label', 'ESTADO': 'no label', 'CODIGOF': 'no label', 'COMPE_0035': 'no label', 'ELECT_0035': 'no label', 'TITUL_0035': 'no label', 'ANCHO_0036': 'no label', 'NVIAS_0036': 'no label', 'VELOC_0036': 'no label', 'IDIOMA': 'no label', 'NOMBRE': 'no label', 'IDTOPONIMO': 'no label', 'NVIAS_0038': 'no label', 'NVIAS_0040': 'no label', 'USO_VIA': 'no label', 'LEYENDA_1': 'no label', 'LEGENDA_1': 'no label', 'LEY_SIMP_1': 'no label', 'LEG_SINP_1': 'no label', 'NOMBRE_2': 'no label', 'Shape_Leng': 'no label', 'LINEA': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Restodeaccesos_6.set('fieldLabels', {'fid': 'no label', 'Parada': 'inline label - visible with data', 'Ubicación': 'inline label - visible with data', });
lyr_Accesostipofosterazo_7.set('fieldLabels', {'fid': 'no label', 'Parada': 'inline label - visible with data', 'Ubicación': 'inline label - visible with data', });
lyr_ElfosterazoSarriko_8.set('fieldLabels', {'fid': 'no label', 'Ubicación': 'inline label - visible with data', 'Parada': 'inline label - visible with data', });
lyr_Accesostipofosterito_9.set('fieldLabels', {'fid': 'no label', 'Parada': 'inline label - visible with data', 'Ubicación': 'inline label - visible with data', });
lyr_Accesostipofosterito_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});