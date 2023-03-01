ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32616").setExtent([49597.476215, 1353277.551958, 1131557.586016, 1924702.371853]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Departamentos_1 = new ol.format.GeoJSON();
var features_Departamentos_1 = format_Departamentos_1.readFeatures(json_Departamentos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32616'});
var jsonSource_Departamentos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentos_1.addFeatures(features_Departamentos_1);
var lyr_Departamentos_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Departamentos_1, 
                style: style_Departamentos_1,
                interactive: true,
                title: '<img src="styles/legend/Departamentos_1.png" /> Departamentos'
            });
var format_TerritoriosIndigenas_2 = new ol.format.GeoJSON();
var features_TerritoriosIndigenas_2 = format_TerritoriosIndigenas_2.readFeatures(json_TerritoriosIndigenas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32616'});
var jsonSource_TerritoriosIndigenas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerritoriosIndigenas_2.addFeatures(features_TerritoriosIndigenas_2);
var lyr_TerritoriosIndigenas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TerritoriosIndigenas_2, 
                style: style_TerritoriosIndigenas_2,
                interactive: true,
    title: 'Territorios Indigenas<br />\
    <img src="styles/legend/TerritoriosIndigenas_2_0.png" /> <br />\
    <img src="styles/legend/TerritoriosIndigenas_2_1.png" /> Garifuna<br />\
    <img src="styles/legend/TerritoriosIndigenas_2_2.png" /> Isleno<br />\
    <img src="styles/legend/TerritoriosIndigenas_2_3.png" /> Lenca<br />\
    <img src="styles/legend/TerritoriosIndigenas_2_4.png" /> Maya Chorti<br />\
    <img src="styles/legend/TerritoriosIndigenas_2_5.png" /> Multietnico/Multiethnic<br />\
    <img src="styles/legend/TerritoriosIndigenas_2_6.png" /> Nahua<br />\
    <img src="styles/legend/TerritoriosIndigenas_2_7.png" /> Pech<br />\
    <img src="styles/legend/TerritoriosIndigenas_2_8.png" /> Tolupan<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Departamentos_1.setVisible(true);lyr_TerritoriosIndigenas_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Departamentos_1,lyr_TerritoriosIndigenas_2];
lyr_Departamentos_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GEOCODIGO': 'GEOCODIGO', 'NOMBRE': 'NOMBRE', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'HECTARES': 'HECTARES', 'ACRES': 'ACRES', 'SQ_MILES': 'SQ_MILES', 'SQ_KM': 'SQ_KM', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_TerritoriosIndigenas_2.set('fieldAliases', {'id_0': 'id_0', 'id': 'id', 'etnia_id': 'etnia_id', 'etnia': 'etnia', });
lyr_Departamentos_1.set('fieldImages', {'OBJECTID': 'Range', 'GEOCODIGO': 'TextEdit', 'NOMBRE': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'HECTARES': 'TextEdit', 'ACRES': 'TextEdit', 'SQ_MILES': 'TextEdit', 'SQ_KM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_TerritoriosIndigenas_2.set('fieldImages', {'id_0': 'Range', 'id': 'Range', 'etnia_id': 'Range', 'etnia': 'TextEdit', });
lyr_Departamentos_1.set('fieldLabels', {'OBJECTID': 'header label', 'GEOCODIGO': 'header label', 'NOMBRE': 'header label', 'AREA': 'header label', 'PERIMETER': 'header label', 'HECTARES': 'header label', 'ACRES': 'header label', 'SQ_MILES': 'header label', 'SQ_KM': 'header label', 'Shape_Leng': 'header label', 'Shape_Area': 'header label', });
lyr_TerritoriosIndigenas_2.set('fieldLabels', {'id_0': 'header label', 'id': 'header label', 'etnia_id': 'header label', 'etnia': 'no label', });
lyr_TerritoriosIndigenas_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});