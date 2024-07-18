var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 0.600000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Old_CMA_1 = new ol.format.GeoJSON();
var features_Old_CMA_1 = format_Old_CMA_1.readFeatures(json_Old_CMA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Old_CMA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Old_CMA_1.addFeatures(features_Old_CMA_1);
var lyr_Old_CMA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Old_CMA_1, 
                style: style_Old_CMA_1,
                popuplayertitle: "Old_CMA",
                interactive: false,
                title: '<img src="styles/legend/Old_CMA_1.png" /> Old_CMA'
            });
var format_Expanded_CMA_2 = new ol.format.GeoJSON();
var features_Expanded_CMA_2 = format_Expanded_CMA_2.readFeatures(json_Expanded_CMA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Expanded_CMA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Expanded_CMA_2.addFeatures(features_Expanded_CMA_2);
var lyr_Expanded_CMA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Expanded_CMA_2, 
                style: style_Expanded_CMA_2,
                popuplayertitle: "Expanded_CMA",
                interactive: false,
                title: '<img src="styles/legend/Expanded_CMA_2.png" /> Expanded_CMA'
            });
var format_Villages_3 = new ol.format.GeoJSON();
var features_Villages_3 = format_Villages_3.readFeatures(json_Villages_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Villages_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Villages_3.addFeatures(features_Villages_3);
var lyr_Villages_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Villages_3, 
                style: style_Villages_3,
                popuplayertitle: "Villages",
                interactive: true,
                title: '<img src="styles/legend/Villages_3.png" /> Villages'
            });
var format_GCC_4 = new ol.format.GeoJSON();
var features_GCC_4 = format_GCC_4.readFeatures(json_GCC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GCC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GCC_4.addFeatures(features_GCC_4);
var lyr_GCC_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GCC_4, 
                style: style_GCC_4,
                popuplayertitle: "GCC",
                interactive: false,
                title: '<img src="styles/legend/GCC_4.png" /> GCC'
            });
var format_Tambaram_Corporation_5 = new ol.format.GeoJSON();
var features_Tambaram_Corporation_5 = format_Tambaram_Corporation_5.readFeatures(json_Tambaram_Corporation_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tambaram_Corporation_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tambaram_Corporation_5.addFeatures(features_Tambaram_Corporation_5);
var lyr_Tambaram_Corporation_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tambaram_Corporation_5, 
                style: style_Tambaram_Corporation_5,
                popuplayertitle: "Tambaram_Corporation",
                interactive: false,
                title: '<img src="styles/legend/Tambaram_Corporation_5.png" /> Tambaram_Corporation'
            });
var format_Kancheepurami_Corporation_6 = new ol.format.GeoJSON();
var features_Kancheepurami_Corporation_6 = format_Kancheepurami_Corporation_6.readFeatures(json_Kancheepurami_Corporation_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kancheepurami_Corporation_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kancheepurami_Corporation_6.addFeatures(features_Kancheepurami_Corporation_6);
var lyr_Kancheepurami_Corporation_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kancheepurami_Corporation_6, 
                style: style_Kancheepurami_Corporation_6,
                popuplayertitle: "Kancheepurami_Corporation",
                interactive: false,
                title: '<img src="styles/legend/Kancheepurami_Corporation_6.png" /> Kancheepurami_Corporation'
            });
var format_Avadi_Corporation_7 = new ol.format.GeoJSON();
var features_Avadi_Corporation_7 = format_Avadi_Corporation_7.readFeatures(json_Avadi_Corporation_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Avadi_Corporation_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Avadi_Corporation_7.addFeatures(features_Avadi_Corporation_7);
var lyr_Avadi_Corporation_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Avadi_Corporation_7, 
                style: style_Avadi_Corporation_7,
                popuplayertitle: "Avadi_Corporation",
                interactive: false,
                title: '<img src="styles/legend/Avadi_Corporation_7.png" /> Avadi_Corporation'
            });
var format_Corridor547_0kmMadhavaramtoSholinganallur_8 = new ol.format.GeoJSON();
var features_Corridor547_0kmMadhavaramtoSholinganallur_8 = format_Corridor547_0kmMadhavaramtoSholinganallur_8.readFeatures(json_Corridor547_0kmMadhavaramtoSholinganallur_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Corridor547_0kmMadhavaramtoSholinganallur_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Corridor547_0kmMadhavaramtoSholinganallur_8.addFeatures(features_Corridor547_0kmMadhavaramtoSholinganallur_8);
var lyr_Corridor547_0kmMadhavaramtoSholinganallur_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Corridor547_0kmMadhavaramtoSholinganallur_8, 
                style: style_Corridor547_0kmMadhavaramtoSholinganallur_8,
                popuplayertitle: "Corridor 5 - 47_0km (Madhavaram to Sholinganallur)",
                interactive: false,
                title: '<img src="styles/legend/Corridor547_0kmMadhavaramtoSholinganallur_8.png" /> Corridor 5 - 47_0km (Madhavaram to Sholinganallur)'
            });
var format_Corridor426_1kmLighthousetoPoonamallee_9 = new ol.format.GeoJSON();
var features_Corridor426_1kmLighthousetoPoonamallee_9 = format_Corridor426_1kmLighthousetoPoonamallee_9.readFeatures(json_Corridor426_1kmLighthousetoPoonamallee_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Corridor426_1kmLighthousetoPoonamallee_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Corridor426_1kmLighthousetoPoonamallee_9.addFeatures(features_Corridor426_1kmLighthousetoPoonamallee_9);
var lyr_Corridor426_1kmLighthousetoPoonamallee_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Corridor426_1kmLighthousetoPoonamallee_9, 
                style: style_Corridor426_1kmLighthousetoPoonamallee_9,
                popuplayertitle: "Corridor 4 - 26_1km (Lighthouse to Poonamallee)",
                interactive: false,
                title: '<img src="styles/legend/Corridor426_1kmLighthousetoPoonamallee_9.png" /> Corridor 4 - 26_1km (Lighthouse to Poonamallee)'
            });
var format_Corridor345_8kmMadhavaramtoSIPCOT_10 = new ol.format.GeoJSON();
var features_Corridor345_8kmMadhavaramtoSIPCOT_10 = format_Corridor345_8kmMadhavaramtoSIPCOT_10.readFeatures(json_Corridor345_8kmMadhavaramtoSIPCOT_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Corridor345_8kmMadhavaramtoSIPCOT_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Corridor345_8kmMadhavaramtoSIPCOT_10.addFeatures(features_Corridor345_8kmMadhavaramtoSIPCOT_10);
var lyr_Corridor345_8kmMadhavaramtoSIPCOT_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Corridor345_8kmMadhavaramtoSIPCOT_10, 
                style: style_Corridor345_8kmMadhavaramtoSIPCOT_10,
                popuplayertitle: "Corridor 3 - 45_8km (Madhavaram to SIPCOT)",
                interactive: false,
                title: '<img src="styles/legend/Corridor345_8kmMadhavaramtoSIPCOT_10.png" /> Corridor 3 - 45_8km (Madhavaram to SIPCOT)'
            });
var format_CompleteStreetsCS_PackageBoundary_11 = new ol.format.GeoJSON();
var features_CompleteStreetsCS_PackageBoundary_11 = format_CompleteStreetsCS_PackageBoundary_11.readFeatures(json_CompleteStreetsCS_PackageBoundary_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CompleteStreetsCS_PackageBoundary_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CompleteStreetsCS_PackageBoundary_11.addFeatures(features_CompleteStreetsCS_PackageBoundary_11);
var lyr_CompleteStreetsCS_PackageBoundary_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CompleteStreetsCS_PackageBoundary_11, 
                style: style_CompleteStreetsCS_PackageBoundary_11,
                popuplayertitle: "Complete Streets(CS)_Package Boundary",
                interactive: true,
                title: '<img src="styles/legend/CompleteStreetsCS_PackageBoundary_11.png" /> Complete Streets(CS)_Package Boundary'
            });
var format_HealthWalk2024_12 = new ol.format.GeoJSON();
var features_HealthWalk2024_12 = format_HealthWalk2024_12.readFeatures(json_HealthWalk2024_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HealthWalk2024_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HealthWalk2024_12.addFeatures(features_HealthWalk2024_12);
var lyr_HealthWalk2024_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HealthWalk2024_12, 
                style: style_HealthWalk2024_12,
                popuplayertitle: "Health Walk 2024",
                interactive: true,
                title: '<img src="styles/legend/HealthWalk2024_12.png" /> Health Walk 2024'
            });
var format_CS_SUSPB_13 = new ol.format.GeoJSON();
var features_CS_SUSPB_13 = format_CS_SUSPB_13.readFeatures(json_CS_SUSPB_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CS_SUSPB_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CS_SUSPB_13.addFeatures(features_CS_SUSPB_13);
var lyr_CS_SUSPB_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CS_SUSPB_13, 
                style: style_CS_SUSPB_13,
                popuplayertitle: "CS_SUSP B",
                interactive: true,
                title: '<img src="styles/legend/CS_SUSPB_13.png" /> CS_SUSP B'
            });
var format_CS_SUSPA_14 = new ol.format.GeoJSON();
var features_CS_SUSPA_14 = format_CS_SUSPA_14.readFeatures(json_CS_SUSPA_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CS_SUSPA_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CS_SUSPA_14.addFeatures(features_CS_SUSPA_14);
var lyr_CS_SUSPA_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CS_SUSPA_14, 
                style: style_CS_SUSPA_14,
                popuplayertitle: "CS_SUSP A",
                interactive: true,
                title: '<img src="styles/legend/CS_SUSPA_14.png" /> CS_SUSP A'
            });
var format_BRR_Completed_15 = new ol.format.GeoJSON();
var features_BRR_Completed_15 = format_BRR_Completed_15.readFeatures(json_BRR_Completed_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BRR_Completed_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BRR_Completed_15.addFeatures(features_BRR_Completed_15);
var lyr_BRR_Completed_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BRR_Completed_15, 
                style: style_BRR_Completed_15,
                popuplayertitle: "BRR_Completed",
                interactive: true,
                title: '<img src="styles/legend/BRR_Completed_15.png" /> BRR_Completed'
            });
var format_BRRTURIFRoads2024_16 = new ol.format.GeoJSON();
var features_BRRTURIFRoads2024_16 = format_BRRTURIFRoads2024_16.readFeatures(json_BRRTURIFRoads2024_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BRRTURIFRoads2024_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BRRTURIFRoads2024_16.addFeatures(features_BRRTURIFRoads2024_16);
var lyr_BRRTURIFRoads2024_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BRRTURIFRoads2024_16, 
                style: style_BRRTURIFRoads2024_16,
                popuplayertitle: "BRR - TURIF Roads 2024",
                interactive: true,
                title: '<img src="styles/legend/BRRTURIFRoads2024_16.png" /> BRR - TURIF Roads 2024'
            });
var format_highways_ongoing_projects_17 = new ol.format.GeoJSON();
var features_highways_ongoing_projects_17 = format_highways_ongoing_projects_17.readFeatures(json_highways_ongoing_projects_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highways_ongoing_projects_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highways_ongoing_projects_17.addFeatures(features_highways_ongoing_projects_17);
var lyr_highways_ongoing_projects_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highways_ongoing_projects_17, 
                style: style_highways_ongoing_projects_17,
                popuplayertitle: "highways_ongoing_projects",
                interactive: true,
                title: 'highways_ongoing_projects'
            });
var format_ConstructionofRoBatPerungalathur_18 = new ol.format.GeoJSON();
var features_ConstructionofRoBatPerungalathur_18 = format_ConstructionofRoBatPerungalathur_18.readFeatures(json_ConstructionofRoBatPerungalathur_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ConstructionofRoBatPerungalathur_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ConstructionofRoBatPerungalathur_18.addFeatures(features_ConstructionofRoBatPerungalathur_18);
var lyr_ConstructionofRoBatPerungalathur_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ConstructionofRoBatPerungalathur_18, 
                style: style_ConstructionofRoBatPerungalathur_18,
                popuplayertitle: "Construction of RoB at Perungalathur",
                interactive: true,
                title: '<img src="styles/legend/ConstructionofRoBatPerungalathur_18.png" /> Construction of RoB at Perungalathur'
            });
var format_HW_ConstructionofRoBatPerungalathur_19 = new ol.format.GeoJSON();
var features_HW_ConstructionofRoBatPerungalathur_19 = format_HW_ConstructionofRoBatPerungalathur_19.readFeatures(json_HW_ConstructionofRoBatPerungalathur_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HW_ConstructionofRoBatPerungalathur_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HW_ConstructionofRoBatPerungalathur_19.addFeatures(features_HW_ConstructionofRoBatPerungalathur_19);
var lyr_HW_ConstructionofRoBatPerungalathur_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HW_ConstructionofRoBatPerungalathur_19, 
                style: style_HW_ConstructionofRoBatPerungalathur_19,
                popuplayertitle: "HW_Construction of RoB at Perungalathur",
                interactive: true,
                title: '<img src="styles/legend/HW_ConstructionofRoBatPerungalathur_19.png" /> HW_Construction of RoB at Perungalathur'
            });
var format_HighwaysOngoingProjects_20 = new ol.format.GeoJSON();
var features_HighwaysOngoingProjects_20 = format_HighwaysOngoingProjects_20.readFeatures(json_HighwaysOngoingProjects_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HighwaysOngoingProjects_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HighwaysOngoingProjects_20.addFeatures(features_HighwaysOngoingProjects_20);
var lyr_HighwaysOngoingProjects_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HighwaysOngoingProjects_20, 
                style: style_HighwaysOngoingProjects_20,
                popuplayertitle: "Highways Ongoing Projects",
                interactive: true,
                title: '<img src="styles/legend/HighwaysOngoingProjects_20.png" /> Highways Ongoing Projects'
            });
var format_DMAOngoingProjects_21 = new ol.format.GeoJSON();
var features_DMAOngoingProjects_21 = format_DMAOngoingProjects_21.readFeatures(json_DMAOngoingProjects_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DMAOngoingProjects_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DMAOngoingProjects_21.addFeatures(features_DMAOngoingProjects_21);
var lyr_DMAOngoingProjects_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DMAOngoingProjects_21, 
                style: style_DMAOngoingProjects_21,
                popuplayertitle: "DMA Ongoing Projects",
                interactive: true,
                title: '<img src="styles/legend/DMAOngoingProjects_21.png" /> DMA Ongoing Projects'
            });
var format_CMWSSBOngoingProjects_22 = new ol.format.GeoJSON();
var features_CMWSSBOngoingProjects_22 = format_CMWSSBOngoingProjects_22.readFeatures(json_CMWSSBOngoingProjects_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CMWSSBOngoingProjects_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CMWSSBOngoingProjects_22.addFeatures(features_CMWSSBOngoingProjects_22);
var lyr_CMWSSBOngoingProjects_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CMWSSBOngoingProjects_22, 
                style: style_CMWSSBOngoingProjects_22,
                popuplayertitle: "CMWSSB Ongoing Projects",
                interactive: true,
                title: '<img src="styles/legend/CMWSSBOngoingProjects_22.png" /> CMWSSB Ongoing Projects'
            });
var format_TWADOngoingProjects_23 = new ol.format.GeoJSON();
var features_TWADOngoingProjects_23 = format_TWADOngoingProjects_23.readFeatures(json_TWADOngoingProjects_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TWADOngoingProjects_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TWADOngoingProjects_23.addFeatures(features_TWADOngoingProjects_23);
var lyr_TWADOngoingProjects_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TWADOngoingProjects_23, 
                style: style_TWADOngoingProjects_23,
                popuplayertitle: "TWAD Ongoing Projects",
                interactive: true,
                title: '<img src="styles/legend/TWADOngoingProjects_23.png" /> TWAD Ongoing Projects'
            });
var format_ITSJunctionschennai_its_165_junctions_24 = new ol.format.GeoJSON();
var features_ITSJunctionschennai_its_165_junctions_24 = format_ITSJunctionschennai_its_165_junctions_24.readFeatures(json_ITSJunctionschennai_its_165_junctions_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ITSJunctionschennai_its_165_junctions_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ITSJunctionschennai_its_165_junctions_24.addFeatures(features_ITSJunctionschennai_its_165_junctions_24);
var lyr_ITSJunctionschennai_its_165_junctions_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ITSJunctionschennai_its_165_junctions_24, 
                style: style_ITSJunctionschennai_its_165_junctions_24,
                popuplayertitle: "ITS Junctions — chennai_its_165_junctions",
                interactive: true,
                title: '<img src="styles/legend/ITSJunctionschennai_its_165_junctions_24.png" /> ITS Junctions — chennai_its_165_junctions'
            });
var group_Highways_Ongoing = new ol.layer.Group({
                                layers: [lyr_highways_ongoing_projects_17,],
                                fold: "open",
                                title: "Highways_Ongoing"});
var group_GCC_Street_Networks = new ol.layer.Group({
                                layers: [lyr_HealthWalk2024_12,lyr_CS_SUSPB_13,lyr_CS_SUSPA_14,lyr_BRR_Completed_15,lyr_BRRTURIFRoads2024_16,],
                                fold: "open",
                                title: "GCC_Street_Networks"});

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Old_CMA_1.setVisible(true);lyr_Expanded_CMA_2.setVisible(true);lyr_Villages_3.setVisible(true);lyr_GCC_4.setVisible(true);lyr_Tambaram_Corporation_5.setVisible(true);lyr_Kancheepurami_Corporation_6.setVisible(true);lyr_Avadi_Corporation_7.setVisible(true);lyr_Corridor547_0kmMadhavaramtoSholinganallur_8.setVisible(true);lyr_Corridor426_1kmLighthousetoPoonamallee_9.setVisible(true);lyr_Corridor345_8kmMadhavaramtoSIPCOT_10.setVisible(true);lyr_CompleteStreetsCS_PackageBoundary_11.setVisible(true);lyr_HealthWalk2024_12.setVisible(true);lyr_CS_SUSPB_13.setVisible(true);lyr_CS_SUSPA_14.setVisible(true);lyr_BRR_Completed_15.setVisible(true);lyr_BRRTURIFRoads2024_16.setVisible(true);lyr_highways_ongoing_projects_17.setVisible(true);lyr_ConstructionofRoBatPerungalathur_18.setVisible(true);lyr_HW_ConstructionofRoBatPerungalathur_19.setVisible(true);lyr_HighwaysOngoingProjects_20.setVisible(true);lyr_DMAOngoingProjects_21.setVisible(true);lyr_CMWSSBOngoingProjects_22.setVisible(true);lyr_TWADOngoingProjects_23.setVisible(true);lyr_ITSJunctionschennai_its_165_junctions_24.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Old_CMA_1,lyr_Expanded_CMA_2,lyr_Villages_3,lyr_GCC_4,lyr_Tambaram_Corporation_5,lyr_Kancheepurami_Corporation_6,lyr_Avadi_Corporation_7,lyr_Corridor547_0kmMadhavaramtoSholinganallur_8,lyr_Corridor426_1kmLighthousetoPoonamallee_9,lyr_Corridor345_8kmMadhavaramtoSIPCOT_10,lyr_CompleteStreetsCS_PackageBoundary_11,group_GCC_Street_Networks,group_Highways_Ongoing,lyr_ConstructionofRoBatPerungalathur_18,lyr_HW_ConstructionofRoBatPerungalathur_19,lyr_HighwaysOngoingProjects_20,lyr_DMAOngoingProjects_21,lyr_CMWSSBOngoingProjects_22,lyr_TWADOngoingProjects_23,lyr_ITSJunctionschennai_its_165_junctions_24];
lyr_Old_CMA_1.set('fieldAliases', {'T_CODE': 'T_CODE', 'T_NAME': 'T_NAME', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Dist_name': 'Dist_name', 'Area_Gaz': 'Area_Gaz', });
lyr_Expanded_CMA_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Villages_3.set('fieldAliases', {'TALUK_': 'TALUK_', 'T_NAME': 'T_NAME', 'Vilg_Num': 'Vilg_Num', 'VilgNo_Sub': 'VilgNo_Sub', 'Vil_Name': 'Vil_Name', 'GO_Vilg_No': 'GO_Vilg_No', 'Channel': 'Channel', 'Local_Body': 'Local_Body', 'LB_Type': 'LB_Type', 'Serial_No': 'Serial_No', 'GO_VNam_La': 'GO_VNam_La', 'GO_Vlg_Nam': 'GO_Vlg_Nam', 'District': 'District', });
lyr_GCC_4.set('fieldAliases', {'gid': 'gid', '__gid': '__gid', 'dist_name': 'dist_name', 'drd_dcode': 'drd_dcode', 'drddcode': 'drddcode', 'dist_mmm': 'dist_mmm', 'cen_dcode2': 'cen_dcode2', 'cen_dcod_1': 'cen_dcod_1', 'cen_dcode': 'cen_dcode', 'dcode': 'dcode', 'district': 'district', 'district_t': 'district_t', 'ed_distric': 'ed_distric', 'FID_1': 'FID_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Tambaram_Corporation_5.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'MP_I': 'MP_I', 'GisKey2013': 'GisKey2013', 'dist_code': 'dist_code', 'dist_name': 'dist_name', 'taluk_code': 'taluk_code', 'taluk_name': 'taluk_name', 'lb_code': 'lb_code', 'lb_name': 'lb_name', 'lb_type': 'lb_type', 'vill_code': 'vill_code', 'vill_name': 'vill_name', 'landuse_co': 'landuse_co', 'VCODE_': 'VCODE_', 'LocalBodyT': 'LocalBodyT', 'LocalBodyN': 'LocalBodyN', 'VillageNam': 'VillageNam', 'Taluk_': 'Taluk_', 'District_': 'District_', 'BlockNo_': 'BlockNo_', 'SurveyNo_': 'SurveyNo_', 'SubDn_No_': 'SubDn_No_', 'SubDn_A_': 'SubDn_A_', 'SMP_DDP_': 'SMP_DDP_', 'DDP_Name_': 'DDP_Name_', 'CRZ_': 'CRZ_', 'ARA_': 'ARA_', 'RCA_': 'RCA_', 'CBA_': 'CBA_', 'EWS_': 'EWS_', 'IT_Corrido': 'IT_Corrido', 'MRTS_Influ': 'MRTS_Influ', 'Airport_': 'Airport_', 'StreetAlig': 'StreetAlig', 'LayoutAppr': 'LayoutAppr', 'Reclassifi': 'Reclassifi', 'GreenBelt_': 'GreenBelt_', 'ZONE_No': 'ZONE_No', 'DIVISION_N': 'DIVISION_N', 'Block_A': 'Block_A', 'ASI': 'ASI', 'IAF': 'IAF', 'Key_Adanga': 'Key_Adanga', 'Ownership': 'Ownership', 'Adangal_Re': 'Adangal_Re', 'Plot_No': 'Plot_No', 'Block_No': 'Block_No', 'Survey_No': 'Survey_No', 'AirportExp': 'AirportExp', 'AirforceSt': 'AirforceSt', 'LB2013': 'LB2013', 'ProposedLa': 'ProposedLa', 'MSB': 'MSB', 'GH': 'GH', 'Remarks': 'Remarks', 'Note': 'Note', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Kancheepurami_Corporation_6.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'TALUK_': 'TALUK_', 'TALUK_ID': 'TALUK_ID', 'T_CODE': 'T_CODE', 'T_NAME': 'T_NAME', 'Vilg_Num': 'Vilg_Num', 'VilgNo_Sub': 'VilgNo_Sub', 'Vil_Name': 'Vil_Name', 'Taluk_Vilg': 'Taluk_Vilg', 'District_N': 'District_N', 'Local_Body': 'Local_Body', 'LB_Type': 'LB_Type', });
lyr_Avadi_Corporation_7.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'MP_I': 'MP_I', 'GisKey2013': 'GisKey2013', 'dist_code': 'dist_code', 'dist_name': 'dist_name', 'taluk_code': 'taluk_code', 'taluk_name': 'taluk_name', 'lb_code': 'lb_code', 'lb_name': 'lb_name', 'lb_type': 'lb_type', 'vill_code': 'vill_code', 'vill_name': 'vill_name', 'landuse_co': 'landuse_co', 'landuse_de': 'landuse_de', 'VCODE_': 'VCODE_', 'LocalBodyT': 'LocalBodyT', 'LocalBodyN': 'LocalBodyN', 'VillageNam': 'VillageNam', 'Taluk_': 'Taluk_', 'District_': 'District_', 'BlockNo_': 'BlockNo_', 'SurveyNo_': 'SurveyNo_', 'SubDn_No_': 'SubDn_No_', 'SubDn_A_': 'SubDn_A_', 'SMP_DDP_': 'SMP_DDP_', 'DDP_Name_': 'DDP_Name_', 'CRZ_': 'CRZ_', 'ARA_': 'ARA_', 'RCA_': 'RCA_', 'CBA_': 'CBA_', 'EWS_': 'EWS_', 'IT_Corrido': 'IT_Corrido', 'MRTS_Influ': 'MRTS_Influ', 'Airport_': 'Airport_', 'StreetAlig': 'StreetAlig', 'LayoutAppr': 'LayoutAppr', 'Reclassifi': 'Reclassifi', 'GreenBelt_': 'GreenBelt_', 'ZONE_No': 'ZONE_No', 'DIVISION_N': 'DIVISION_N', 'Block_A': 'Block_A', 'ASI': 'ASI', 'IAF': 'IAF', 'Key_Adanga': 'Key_Adanga', 'Ownership': 'Ownership', 'Adangal_Re': 'Adangal_Re', 'Plot_No': 'Plot_No', 'Block_No': 'Block_No', 'Survey_No': 'Survey_No', 'AirportExp': 'AirportExp', 'AirforceSt': 'AirforceSt', 'LB2013': 'LB2013', 'ProposedLa': 'ProposedLa', 'MSB': 'MSB', 'GH': 'GH', 'Remarks': 'Remarks', 'Note': 'Note', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Corridor547_0kmMadhavaramtoSholinganallur_8.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', });
lyr_Corridor426_1kmLighthousetoPoonamallee_9.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', });
lyr_Corridor345_8kmMadhavaramtoSIPCOT_10.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', });
lyr_CompleteStreetsCS_PackageBoundary_11.set('fieldAliases', {'OGR_FID': 'OGR_FID', 'Name': 'Name', });
lyr_HealthWalk2024_12.set('fieldAliases', {'OGR_FID': 'OGR_FID', 'Name': 'Name', 'description': 'description', 'Length': 'Length', 'Zone': 'Zone', 'Completed': 'Completed', 'Phase': 'Phase', 'Cost': 'Cost', 'Division_No_': 'Division_No_', });
lyr_CS_SUSPB_13.set('fieldAliases', {'OGR_FID': 'OGR_FID', 'Name': 'Name', 'description': 'description', 'Street_Code': 'Street_Code', 'Length': 'Length', 'ROW': 'ROW', 'Package': 'Package', 'Package_name': 'Package_name', 'Zone': 'Zone', 'Consultant_Name': 'Consultant_Name', 'Priority': 'Priority', 'No__of_ITS': 'No__of_ITS', });
lyr_CS_SUSPA_14.set('fieldAliases', {'OGR_FID': 'OGR_FID', 'Name': 'Name', 'description': 'description', 'Street_Code': 'Street_Code', 'Length': 'Length', 'ROW': 'ROW', 'Package': 'Package', 'Package_name': 'Package_name', 'Zone': 'Zone', 'Consultant_Name': 'Consultant_Name', 'No_of_ITS': 'No_of_ITS', });
lyr_BRR_Completed_15.set('fieldAliases', {'OGR_FID': 'OGR_FID', 'Name': 'Name', 'description': 'description', 'Length': 'Length', 'Zone': 'Zone', 'Completed': 'Completed', 'Phase': 'Phase', 'Cost': 'Cost', });
lyr_BRRTURIFRoads2024_16.set('fieldAliases', {'OGR_FID': 'OGR_FID', 'Name': 'Name', 'description': 'description', 'Length': 'Length', 'Zone': 'Zone', 'Phase': 'Phase', 'Status_of_Completion': 'Status_of_Completion', 'RoW': 'RoW', });
lyr_highways_ongoing_projects_17.set('fieldAliases', {});
lyr_ConstructionofRoBatPerungalathur_18.set('fieldAliases', {'fid': 'fid', 'S.No': 'S.No', 'Proj_Title': 'Proj_Title', 'Work_Status_Code': 'Work_Status_Code', });
lyr_HW_ConstructionofRoBatPerungalathur_19.set('fieldAliases', {'fid': 'fid', 'S.No': 'S.No', 'Proj_Title': 'Proj_Title', });
lyr_HighwaysOngoingProjects_20.set('fieldAliases', {'fid': 'fid', 'Project_Name': 'Project_Name', 'Location': 'Location', 'Project_Cost': 'Project_Cost', 'Start_Date': 'Start_Date', 'Expected_date_of_completion': 'Expected_date_of_completion', 'Source_of_Fund': 'Source_of_Fund', 'Infra_Type': 'Infra_Type', });
lyr_DMAOngoingProjects_21.set('fieldAliases', {'fid': 'fid', 'Project_name': 'Project_name', 'Location': 'Location', 'Project_Cost': 'Project_Cost', 'Start_date': 'Start_date', 'Expected_Date_of_Completion': 'Expected_Date_of_Completion', 'Source_of_Fund': 'Source_of_Fund', 'Infra_Type': 'Infra_Type', 'Remarks': 'Remarks', 'Status': 'Status', });
lyr_CMWSSBOngoingProjects_22.set('fieldAliases', {'fid': 'fid', 'Project_name': 'Project_name', 'Location': 'Location', 'Project_Cost': 'Project_Cost', 'Start_date': 'Start_date', 'Expected_Date_of_Completion': 'Expected_Date_of_Completion', 'Source_of_Fund': 'Source_of_Fund', 'Infra_Type': 'Infra_Type', 'Remarks': 'Remarks', 'Status': 'Status', });
lyr_TWADOngoingProjects_23.set('fieldAliases', {'fid': 'fid', 'Project_name': 'Project_name', 'Location': 'Location', 'Project_Cost': 'Project_Cost', 'Start_date': 'Start_date', 'Expected_Date_of_Completion': 'Expected_Date_of_Completion', 'Source_of_Fund': 'Source_of_Fund', 'Infra_Type': 'Infra_Type', 'Remarks': 'Remarks', 'Status': 'Status', });
lyr_ITSJunctionschennai_its_165_junctions_24.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'S_No': 'S_No', 'Location_Name': 'Location_Name', 'Updated_Location_Name': 'Updated_Location_Name', 'Police_ID___Signal_Number': 'Police_ID___Signal_Number', 'Is_Location_in_the_Police_List': 'Is_Location_in_the_Police_List', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Updated_Corridors_Name': 'Updated_Corridors_Name', 'Phase': 'Phase', 'Corridor_Category': 'Corridor_Category', 'Switched_Off_Removed_': 'Switched_Off_Removed_', 'Final_Jn_Category': 'Final_Jn_Category', 'Ped_Traffic': 'Ped_Traffic', 'Is_it_in_Mega_street': 'Is_it_in_Mega_street', 'Mega_Street_Package': 'Mega_Street_Package', 'Quick_Win': 'Quick_Win', 'Road_Category': 'Road_Category', 'Road_Agency': 'Road_Agency', 'GCC_Zone_Number': 'GCC_Zone_Number', 'Name_of_the_Zone': 'Name_of_the_Zone', });
lyr_Old_CMA_1.set('fieldImages', {'T_CODE': 'TextEdit', 'T_NAME': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Dist_name': 'TextEdit', 'Area_Gaz': 'TextEdit', });
lyr_Expanded_CMA_2.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Villages_3.set('fieldImages', {'TALUK_': 'TextEdit', 'T_NAME': 'TextEdit', 'Vilg_Num': 'TextEdit', 'VilgNo_Sub': 'TextEdit', 'Vil_Name': 'TextEdit', 'GO_Vilg_No': 'TextEdit', 'Channel': 'TextEdit', 'Local_Body': 'TextEdit', 'LB_Type': 'TextEdit', 'Serial_No': 'TextEdit', 'GO_VNam_La': 'TextEdit', 'GO_Vlg_Nam': 'TextEdit', 'District': 'TextEdit', });
lyr_GCC_4.set('fieldImages', {'gid': 'TextEdit', '__gid': 'TextEdit', 'dist_name': 'TextEdit', 'drd_dcode': 'TextEdit', 'drddcode': 'TextEdit', 'dist_mmm': 'TextEdit', 'cen_dcode2': 'TextEdit', 'cen_dcod_1': 'TextEdit', 'cen_dcode': 'TextEdit', 'dcode': 'TextEdit', 'district': 'TextEdit', 'district_t': 'TextEdit', 'ed_distric': 'TextEdit', 'FID_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Tambaram_Corporation_5.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'MP_I': 'TextEdit', 'GisKey2013': 'TextEdit', 'dist_code': 'TextEdit', 'dist_name': 'TextEdit', 'taluk_code': 'TextEdit', 'taluk_name': 'TextEdit', 'lb_code': 'TextEdit', 'lb_name': 'TextEdit', 'lb_type': 'TextEdit', 'vill_code': 'TextEdit', 'vill_name': 'TextEdit', 'landuse_co': 'TextEdit', 'VCODE_': 'TextEdit', 'LocalBodyT': 'TextEdit', 'LocalBodyN': 'TextEdit', 'VillageNam': 'TextEdit', 'Taluk_': 'TextEdit', 'District_': 'TextEdit', 'BlockNo_': 'TextEdit', 'SurveyNo_': 'TextEdit', 'SubDn_No_': 'TextEdit', 'SubDn_A_': 'TextEdit', 'SMP_DDP_': 'TextEdit', 'DDP_Name_': 'TextEdit', 'CRZ_': 'TextEdit', 'ARA_': 'TextEdit', 'RCA_': 'TextEdit', 'CBA_': 'TextEdit', 'EWS_': 'TextEdit', 'IT_Corrido': 'TextEdit', 'MRTS_Influ': 'TextEdit', 'Airport_': 'TextEdit', 'StreetAlig': 'TextEdit', 'LayoutAppr': 'TextEdit', 'Reclassifi': 'TextEdit', 'GreenBelt_': 'TextEdit', 'ZONE_No': 'TextEdit', 'DIVISION_N': 'TextEdit', 'Block_A': 'TextEdit', 'ASI': 'TextEdit', 'IAF': 'TextEdit', 'Key_Adanga': 'TextEdit', 'Ownership': 'TextEdit', 'Adangal_Re': 'TextEdit', 'Plot_No': 'TextEdit', 'Block_No': 'TextEdit', 'Survey_No': 'TextEdit', 'AirportExp': 'TextEdit', 'AirforceSt': 'TextEdit', 'LB2013': 'TextEdit', 'ProposedLa': 'TextEdit', 'MSB': 'TextEdit', 'GH': 'TextEdit', 'Remarks': 'TextEdit', 'Note': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Kancheepurami_Corporation_6.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'TALUK_': 'TextEdit', 'TALUK_ID': 'TextEdit', 'T_CODE': 'TextEdit', 'T_NAME': 'TextEdit', 'Vilg_Num': 'TextEdit', 'VilgNo_Sub': 'TextEdit', 'Vil_Name': 'TextEdit', 'Taluk_Vilg': 'TextEdit', 'District_N': 'TextEdit', 'Local_Body': 'TextEdit', 'LB_Type': 'TextEdit', });
lyr_Avadi_Corporation_7.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'MP_I': 'TextEdit', 'GisKey2013': 'TextEdit', 'dist_code': 'TextEdit', 'dist_name': 'TextEdit', 'taluk_code': 'TextEdit', 'taluk_name': 'TextEdit', 'lb_code': 'TextEdit', 'lb_name': 'TextEdit', 'lb_type': 'TextEdit', 'vill_code': 'TextEdit', 'vill_name': 'TextEdit', 'landuse_co': 'TextEdit', 'landuse_de': 'TextEdit', 'VCODE_': 'TextEdit', 'LocalBodyT': 'TextEdit', 'LocalBodyN': 'TextEdit', 'VillageNam': 'TextEdit', 'Taluk_': 'TextEdit', 'District_': 'TextEdit', 'BlockNo_': 'TextEdit', 'SurveyNo_': 'TextEdit', 'SubDn_No_': 'TextEdit', 'SubDn_A_': 'TextEdit', 'SMP_DDP_': 'TextEdit', 'DDP_Name_': 'TextEdit', 'CRZ_': 'TextEdit', 'ARA_': 'TextEdit', 'RCA_': 'TextEdit', 'CBA_': 'TextEdit', 'EWS_': 'TextEdit', 'IT_Corrido': 'TextEdit', 'MRTS_Influ': 'TextEdit', 'Airport_': 'TextEdit', 'StreetAlig': 'TextEdit', 'LayoutAppr': 'TextEdit', 'Reclassifi': 'TextEdit', 'GreenBelt_': 'TextEdit', 'ZONE_No': 'TextEdit', 'DIVISION_N': 'TextEdit', 'Block_A': 'TextEdit', 'ASI': 'TextEdit', 'IAF': 'TextEdit', 'Key_Adanga': 'TextEdit', 'Ownership': 'TextEdit', 'Adangal_Re': 'TextEdit', 'Plot_No': 'TextEdit', 'Block_No': 'TextEdit', 'Survey_No': 'TextEdit', 'AirportExp': 'TextEdit', 'AirforceSt': 'TextEdit', 'LB2013': 'TextEdit', 'ProposedLa': 'TextEdit', 'MSB': 'TextEdit', 'GH': 'TextEdit', 'Remarks': 'TextEdit', 'Note': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Corridor547_0kmMadhavaramtoSholinganallur_8.set('fieldImages', {'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Clamped': 'Range', 'Extruded': 'Range', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Corridor426_1kmLighthousetoPoonamallee_9.set('fieldImages', {'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Clamped': 'Range', 'Extruded': 'Range', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Corridor345_8kmMadhavaramtoSIPCOT_10.set('fieldImages', {'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Clamped': 'Range', 'Extruded': 'Range', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_CompleteStreetsCS_PackageBoundary_11.set('fieldImages', {'OGR_FID': 'TextEdit', 'Name': 'TextEdit', });
lyr_HealthWalk2024_12.set('fieldImages', {'OGR_FID': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'Length': 'TextEdit', 'Zone': 'TextEdit', 'Completed': 'CheckBox', 'Phase': 'Range', 'Cost': 'TextEdit', 'Division_No_': 'TextEdit', });
lyr_CS_SUSPB_13.set('fieldImages', {'OGR_FID': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'Street_Code': 'TextEdit', 'Length': 'TextEdit', 'ROW': 'Range', 'Package': 'Range', 'Package_name': 'TextEdit', 'Zone': 'TextEdit', 'Consultant_Name': 'TextEdit', 'Priority': 'TextEdit', 'No__of_ITS': 'Range', });
lyr_CS_SUSPA_14.set('fieldImages', {'OGR_FID': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'Street_Code': 'TextEdit', 'Length': 'TextEdit', 'ROW': 'Range', 'Package': 'Range', 'Package_name': 'TextEdit', 'Zone': 'TextEdit', 'Consultant_Name': 'TextEdit', 'No_of_ITS': 'Range', });
lyr_BRR_Completed_15.set('fieldImages', {'OGR_FID': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'Length': 'TextEdit', 'Zone': 'TextEdit', 'Completed': 'CheckBox', 'Phase': 'Range', 'Cost': 'TextEdit', });
lyr_BRRTURIFRoads2024_16.set('fieldImages', {'OGR_FID': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'Length': 'TextEdit', 'Zone': 'TextEdit', 'Phase': 'Range', 'Status_of_Completion': 'CheckBox', 'RoW': 'TextEdit', });
lyr_highways_ongoing_projects_17.set('fieldImages', {});
lyr_ConstructionofRoBatPerungalathur_18.set('fieldImages', {'fid': '', 'S.No': '', 'Proj_Title': '', 'Work_Status_Code': '', });
lyr_HW_ConstructionofRoBatPerungalathur_19.set('fieldImages', {'fid': '', 'S.No': '', 'Proj_Title': '', });
lyr_HighwaysOngoingProjects_20.set('fieldImages', {'fid': 'TextEdit', 'Project_Name': 'TextEdit', 'Location': 'TextEdit', 'Project_Cost': 'TextEdit', 'Start_Date': 'DateTime', 'Expected_date_of_completion': 'DateTime', 'Source_of_Fund': 'TextEdit', 'Infra_Type': 'TextEdit', });
lyr_DMAOngoingProjects_21.set('fieldImages', {'fid': 'TextEdit', 'Project_name': 'TextEdit', 'Location': 'TextEdit', 'Project_Cost': 'TextEdit', 'Start_date': 'DateTime', 'Expected_Date_of_Completion': 'DateTime', 'Source_of_Fund': 'TextEdit', 'Infra_Type': 'TextEdit', 'Remarks': 'TextEdit', 'Status': 'TextEdit', });
lyr_CMWSSBOngoingProjects_22.set('fieldImages', {'fid': 'TextEdit', 'Project_name': 'TextEdit', 'Location': 'TextEdit', 'Project_Cost': 'TextEdit', 'Start_date': 'DateTime', 'Expected_Date_of_Completion': 'DateTime', 'Source_of_Fund': 'TextEdit', 'Infra_Type': 'TextEdit', 'Remarks': 'TextEdit', 'Status': 'TextEdit', });
lyr_TWADOngoingProjects_23.set('fieldImages', {'fid': 'TextEdit', 'Project_name': 'TextEdit', 'Location': 'TextEdit', 'Project_Cost': 'TextEdit', 'Start_date': 'DateTime', 'Expected_Date_of_Completion': 'DateTime', 'Source_of_Fund': 'TextEdit', 'Infra_Type': 'TextEdit', 'Remarks': 'TextEdit', 'Status': 'TextEdit', });
lyr_ITSJunctionschennai_its_165_junctions_24.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'S_No': 'TextEdit', 'Location_Name': 'TextEdit', 'Updated_Location_Name': 'TextEdit', 'Police_ID___Signal_Number': 'TextEdit', 'Is_Location_in_the_Police_List': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Updated_Corridors_Name': 'TextEdit', 'Phase': 'TextEdit', 'Corridor_Category': 'TextEdit', 'Switched_Off_Removed_': 'TextEdit', 'Final_Jn_Category': 'TextEdit', 'Ped_Traffic': 'TextEdit', 'Is_it_in_Mega_street': 'TextEdit', 'Mega_Street_Package': 'TextEdit', 'Quick_Win': 'TextEdit', 'Road_Category': 'TextEdit', 'Road_Agency': 'TextEdit', 'GCC_Zone_Number': 'TextEdit', 'Name_of_the_Zone': 'TextEdit', });
lyr_Old_CMA_1.set('fieldLabels', {'T_CODE': 'no label', 'T_NAME': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Dist_name': 'no label', 'Area_Gaz': 'no label', });
lyr_Expanded_CMA_2.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Villages_3.set('fieldLabels', {'TALUK_': 'inline label - always visible', 'T_NAME': 'inline label - always visible', 'Vilg_Num': 'inline label - always visible', 'VilgNo_Sub': 'inline label - always visible', 'Vil_Name': 'inline label - always visible', 'GO_Vilg_No': 'inline label - always visible', 'Channel': 'hidden field', 'Local_Body': 'inline label - always visible', 'LB_Type': 'inline label - always visible', 'Serial_No': 'hidden field', 'GO_VNam_La': 'hidden field', 'GO_Vlg_Nam': 'hidden field', 'District': 'inline label - always visible', });
lyr_GCC_4.set('fieldLabels', {'gid': 'no label', '__gid': 'no label', 'dist_name': 'no label', 'drd_dcode': 'no label', 'drddcode': 'no label', 'dist_mmm': 'no label', 'cen_dcode2': 'no label', 'cen_dcod_1': 'no label', 'cen_dcode': 'no label', 'dcode': 'no label', 'district': 'no label', 'district_t': 'no label', 'ed_distric': 'no label', 'FID_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Tambaram_Corporation_5.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'MP_I': 'no label', 'GisKey2013': 'no label', 'dist_code': 'no label', 'dist_name': 'no label', 'taluk_code': 'no label', 'taluk_name': 'no label', 'lb_code': 'no label', 'lb_name': 'no label', 'lb_type': 'no label', 'vill_code': 'no label', 'vill_name': 'no label', 'landuse_co': 'no label', 'VCODE_': 'no label', 'LocalBodyT': 'no label', 'LocalBodyN': 'no label', 'VillageNam': 'no label', 'Taluk_': 'no label', 'District_': 'no label', 'BlockNo_': 'no label', 'SurveyNo_': 'no label', 'SubDn_No_': 'no label', 'SubDn_A_': 'no label', 'SMP_DDP_': 'no label', 'DDP_Name_': 'no label', 'CRZ_': 'no label', 'ARA_': 'no label', 'RCA_': 'no label', 'CBA_': 'no label', 'EWS_': 'no label', 'IT_Corrido': 'no label', 'MRTS_Influ': 'no label', 'Airport_': 'no label', 'StreetAlig': 'no label', 'LayoutAppr': 'no label', 'Reclassifi': 'no label', 'GreenBelt_': 'no label', 'ZONE_No': 'no label', 'DIVISION_N': 'no label', 'Block_A': 'no label', 'ASI': 'no label', 'IAF': 'no label', 'Key_Adanga': 'no label', 'Ownership': 'no label', 'Adangal_Re': 'no label', 'Plot_No': 'no label', 'Block_No': 'no label', 'Survey_No': 'no label', 'AirportExp': 'no label', 'AirforceSt': 'no label', 'LB2013': 'no label', 'ProposedLa': 'no label', 'MSB': 'no label', 'GH': 'no label', 'Remarks': 'no label', 'Note': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_Kancheepurami_Corporation_6.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'TALUK_': 'no label', 'TALUK_ID': 'no label', 'T_CODE': 'no label', 'T_NAME': 'no label', 'Vilg_Num': 'no label', 'VilgNo_Sub': 'no label', 'Vil_Name': 'no label', 'Taluk_Vilg': 'no label', 'District_N': 'no label', 'Local_Body': 'no label', 'LB_Type': 'no label', });
lyr_Avadi_Corporation_7.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'MP_I': 'no label', 'GisKey2013': 'no label', 'dist_code': 'no label', 'dist_name': 'no label', 'taluk_code': 'no label', 'taluk_name': 'no label', 'lb_code': 'no label', 'lb_name': 'no label', 'lb_type': 'no label', 'vill_code': 'no label', 'vill_name': 'no label', 'landuse_co': 'no label', 'landuse_de': 'no label', 'VCODE_': 'no label', 'LocalBodyT': 'no label', 'LocalBodyN': 'no label', 'VillageNam': 'no label', 'Taluk_': 'no label', 'District_': 'no label', 'BlockNo_': 'no label', 'SurveyNo_': 'no label', 'SubDn_No_': 'no label', 'SubDn_A_': 'no label', 'SMP_DDP_': 'no label', 'DDP_Name_': 'no label', 'CRZ_': 'no label', 'ARA_': 'no label', 'RCA_': 'no label', 'CBA_': 'no label', 'EWS_': 'no label', 'IT_Corrido': 'no label', 'MRTS_Influ': 'no label', 'Airport_': 'no label', 'StreetAlig': 'no label', 'LayoutAppr': 'no label', 'Reclassifi': 'no label', 'GreenBelt_': 'no label', 'ZONE_No': 'no label', 'DIVISION_N': 'no label', 'Block_A': 'no label', 'ASI': 'no label', 'IAF': 'no label', 'Key_Adanga': 'no label', 'Ownership': 'no label', 'Adangal_Re': 'no label', 'Plot_No': 'no label', 'Block_No': 'no label', 'Survey_No': 'no label', 'AirportExp': 'no label', 'AirforceSt': 'no label', 'LB2013': 'no label', 'ProposedLa': 'no label', 'MSB': 'no label', 'GH': 'no label', 'Remarks': 'no label', 'Note': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_Corridor547_0kmMadhavaramtoSholinganallur_8.set('fieldLabels', {'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', });
lyr_Corridor426_1kmLighthousetoPoonamallee_9.set('fieldLabels', {'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', });
lyr_Corridor345_8kmMadhavaramtoSIPCOT_10.set('fieldLabels', {'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', });
lyr_CompleteStreetsCS_PackageBoundary_11.set('fieldLabels', {'OGR_FID': 'hidden field', 'Name': 'inline label - always visible', });
lyr_HealthWalk2024_12.set('fieldLabels', {'OGR_FID': 'hidden field', 'Name': 'inline label - always visible', 'description': 'hidden field', 'Length': 'inline label - always visible', 'Zone': 'inline label - always visible', 'Completed': 'inline label - always visible', 'Phase': 'inline label - always visible', 'Cost': 'inline label - always visible', 'Division_No_': 'inline label - always visible', });
lyr_CS_SUSPB_13.set('fieldLabels', {'OGR_FID': 'hidden field', 'Name': 'inline label - always visible', 'description': 'hidden field', 'Street_Code': 'inline label - always visible', 'Length': 'inline label - always visible', 'ROW': 'inline label - always visible', 'Package': 'inline label - always visible', 'Package_name': 'inline label - always visible', 'Zone': 'inline label - always visible', 'Consultant_Name': 'inline label - always visible', 'Priority': 'inline label - always visible', 'No__of_ITS': 'inline label - always visible', });
lyr_CS_SUSPA_14.set('fieldLabels', {'OGR_FID': 'hidden field', 'Name': 'inline label - always visible', 'description': 'hidden field', 'Street_Code': 'inline label - always visible', 'Length': 'inline label - always visible', 'ROW': 'inline label - always visible', 'Package': 'inline label - always visible', 'Package_name': 'inline label - always visible', 'Zone': 'inline label - always visible', 'Consultant_Name': 'inline label - always visible', 'No_of_ITS': 'inline label - always visible', });
lyr_BRR_Completed_15.set('fieldLabels', {'OGR_FID': 'hidden field', 'Name': 'inline label - always visible', 'description': 'hidden field', 'Length': 'inline label - always visible', 'Zone': 'inline label - always visible', 'Completed': 'inline label - always visible', 'Phase': 'inline label - always visible', 'Cost': 'inline label - always visible', });
lyr_BRRTURIFRoads2024_16.set('fieldLabels', {'OGR_FID': 'hidden field', 'Name': 'inline label - always visible', 'description': 'hidden field', 'Length': 'inline label - always visible', 'Zone': 'inline label - always visible', 'Phase': 'inline label - always visible', 'Status_of_Completion': 'inline label - always visible', 'RoW': 'inline label - always visible', });
lyr_highways_ongoing_projects_17.set('fieldLabels', {});
lyr_ConstructionofRoBatPerungalathur_18.set('fieldLabels', {'fid': 'hidden field', 'S.No': 'hidden field', 'Proj_Title': 'inline label - always visible', 'Work_Status_Code': 'inline label - always visible', });
lyr_HW_ConstructionofRoBatPerungalathur_19.set('fieldLabels', {'fid': 'hidden field', 'S.No': 'hidden field', 'Proj_Title': 'inline label - always visible', });
lyr_HighwaysOngoingProjects_20.set('fieldLabels', {'fid': 'hidden field', 'Project_Name': 'inline label - always visible', 'Location': 'inline label - always visible', 'Project_Cost': 'inline label - always visible', 'Start_Date': 'inline label - always visible', 'Expected_date_of_completion': 'inline label - always visible', 'Source_of_Fund': 'inline label - always visible', 'Infra_Type': 'inline label - always visible', });
lyr_DMAOngoingProjects_21.set('fieldLabels', {'fid': 'hidden field', 'Project_name': 'inline label - always visible', 'Location': 'inline label - always visible', 'Project_Cost': 'inline label - always visible', 'Start_date': 'inline label - always visible', 'Expected_Date_of_Completion': 'inline label - always visible', 'Source_of_Fund': 'inline label - always visible', 'Infra_Type': 'inline label - always visible', 'Remarks': 'inline label - always visible', 'Status': 'inline label - always visible', });
lyr_CMWSSBOngoingProjects_22.set('fieldLabels', {'fid': 'hidden field', 'Project_name': 'inline label - always visible', 'Location': 'inline label - always visible', 'Project_Cost': 'inline label - always visible', 'Start_date': 'inline label - always visible', 'Expected_Date_of_Completion': 'inline label - always visible', 'Source_of_Fund': 'inline label - always visible', 'Infra_Type': 'inline label - always visible', 'Remarks': 'inline label - always visible', 'Status': 'inline label - always visible', });
lyr_TWADOngoingProjects_23.set('fieldLabels', {'fid': 'hidden field', 'Project_name': 'inline label - always visible', 'Location': 'inline label - always visible', 'Project_Cost': 'inline label - always visible', 'Start_date': 'inline label - always visible', 'Expected_Date_of_Completion': 'inline label - always visible', 'Source_of_Fund': 'inline label - always visible', 'Infra_Type': 'inline label - always visible', 'Remarks': 'inline label - always visible', 'Status': 'inline label - always visible', });
lyr_ITSJunctionschennai_its_165_junctions_24.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'inline label - visible with data', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'S_No': 'hidden field', 'Location_Name': 'inline label - always visible', 'Updated_Location_Name': 'hidden field', 'Police_ID___Signal_Number': 'hidden field', 'Is_Location_in_the_Police_List': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Updated_Corridors_Name': 'hidden field', 'Phase': 'inline label - always visible', 'Corridor_Category': 'inline label - always visible', 'Switched_Off_Removed_': 'hidden field', 'Final_Jn_Category': 'hidden field', 'Ped_Traffic': 'hidden field', 'Is_it_in_Mega_street': 'hidden field', 'Mega_Street_Package': 'inline label - always visible', 'Quick_Win': 'hidden field', 'Road_Category': 'inline label - always visible', 'Road_Agency': 'inline label - always visible', 'GCC_Zone_Number': 'inline label - always visible', 'Name_of_the_Zone': 'inline label - always visible', });
lyr_ITSJunctionschennai_its_165_junctions_24.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});