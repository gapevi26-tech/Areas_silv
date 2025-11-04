var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Regincentralpneareas_conservacion_1 = new ol.format.GeoJSON();
var features_Regincentralpneareas_conservacion_1 = format_Regincentralpneareas_conservacion_1.readFeatures(json_Regincentralpneareas_conservacion_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regincentralpneareas_conservacion_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regincentralpneareas_conservacion_1.addFeatures(features_Regincentralpneareas_conservacion_1);
var lyr_Regincentralpneareas_conservacion_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Regincentralpneareas_conservacion_1, 
                style: style_Regincentralpneareas_conservacion_1,
                popuplayertitle: 'Región central — pneareas_conservacion',
                interactive: false,
                title: '<img src="styles/legend/Regincentralpneareas_conservacion_1.png" /> Región central — pneareas_conservacion'
            });
var format_reasSilvestresProtegidasdelreadeconservacincentral_2 = new ol.format.GeoJSON();
var features_reasSilvestresProtegidasdelreadeconservacincentral_2 = format_reasSilvestresProtegidasdelreadeconservacincentral_2.readFeatures(json_reasSilvestresProtegidasdelreadeconservacincentral_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasSilvestresProtegidasdelreadeconservacincentral_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasSilvestresProtegidasdelreadeconservacincentral_2.addFeatures(features_reasSilvestresProtegidasdelreadeconservacincentral_2);
var lyr_reasSilvestresProtegidasdelreadeconservacincentral_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasSilvestresProtegidasdelreadeconservacincentral_2, 
                style: style_reasSilvestresProtegidasdelreadeconservacincentral_2,
                popuplayertitle: 'Áreas Silvestres Protegidas del Área de conservación central',
                interactive: true,
                title: '<img src="styles/legend/reasSilvestresProtegidasdelreadeconservacincentral_2.png" /> Áreas Silvestres Protegidas del Área de conservación central'
            });

lyr_Positron_0.setVisible(true);lyr_Regincentralpneareas_conservacion_1.setVisible(true);lyr_reasSilvestresProtegidasdelreadeconservacincentral_2.setVisible(true);
var layersList = [lyr_Positron_0,lyr_Regincentralpneareas_conservacion_1,lyr_reasSilvestresProtegidasdelreadeconservacincentral_2];
lyr_Regincentralpneareas_conservacion_1.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'codigo_ac': 'codigo_ac', 'nombre_ac': 'nombre_ac', 'siglas_ac': 'siglas_ac', 'regmplan': 'regmplan', 'decreto': 'decreto', 'area_ha': 'area_ha', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_reasSilvestresProtegidasdelreadeconservacincentral_2.set('fieldAliases', {'fid': 'fid', 'codigo': 'codigo', 'nombre_asp': 'nombre_asp', 'cat_manejo': 'cat_manejo', 'estatus': 'estatus', 'siglas_cat': 'siglas_cat', 'nombre_ac': 'nombre_ac', 'siglas_ac': 'siglas_ac', 'descripcio': 'descripcio', 'a_creacion': 'a_creacion', 'n_creacion': 'n_creacion', 'version': 'version', 'area_hecta': 'area_hecta', 'area_km2': 'area_km2', });
lyr_Regincentralpneareas_conservacion_1.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'Range', 'codigo_ac': 'TextEdit', 'nombre_ac': 'TextEdit', 'siglas_ac': 'TextEdit', 'regmplan': 'TextEdit', 'decreto': 'TextEdit', 'area_ha': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_reasSilvestresProtegidasdelreadeconservacincentral_2.set('fieldImages', {'fid': 'TextEdit', 'codigo': 'TextEdit', 'nombre_asp': 'TextEdit', 'cat_manejo': 'TextEdit', 'estatus': 'TextEdit', 'siglas_cat': 'TextEdit', 'nombre_ac': 'TextEdit', 'siglas_ac': 'TextEdit', 'descripcio': 'TextEdit', 'a_creacion': 'TextEdit', 'n_creacion': 'TextEdit', 'version': 'TextEdit', 'area_hecta': 'TextEdit', 'area_km2': 'TextEdit', });
lyr_Regincentralpneareas_conservacion_1.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'codigo_ac': 'hidden field', 'nombre_ac': 'hidden field', 'siglas_ac': 'hidden field', 'regmplan': 'hidden field', 'decreto': 'hidden field', 'area_ha': 'hidden field', 'shape_leng': 'hidden field', 'shape_area': 'hidden field', });
lyr_reasSilvestresProtegidasdelreadeconservacincentral_2.set('fieldLabels', {'fid': 'hidden field', 'codigo': 'hidden field', 'nombre_asp': 'hidden field', 'cat_manejo': 'hidden field', 'estatus': 'hidden field', 'siglas_cat': 'hidden field', 'nombre_ac': 'hidden field', 'siglas_ac': 'hidden field', 'descripcio': 'hidden field', 'a_creacion': 'hidden field', 'n_creacion': 'hidden field', 'version': 'hidden field', 'area_hecta': 'hidden field', 'area_km2': 'hidden field', });
lyr_reasSilvestresProtegidasdelreadeconservacincentral_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});