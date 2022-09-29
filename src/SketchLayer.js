import React, { useEffect, useState } from "react";
import { loadModules } from "esri-loader";

export const SketchLayer = (props) => {
  console.log(props);
  const [sketchLayer, setSketch] = useState(undefined);
  const [graphicsLayer, setGraphicsLayer] = useState(undefined);

  useEffect(() => {
    loadModules(["esri/widgets/Sketch"]).then(([Sketch]) => {
      // console.log(sketchLayer);
      // console.log(graphicsLayer);
      if (!sketchLayer && graphicsLayer) {
        console.log(graphicsLayer);
        props.map.add(graphicsLayer);
        const sketch = new Sketch({
          view: props.view,
          layer: graphicsLayer,
          pointSymbol: {
            type: "simple-marker",
            style: "circle",
            size: 10,
            color: [255, 255, 255, 0.8],
            outline: {
              color: [211, 132, 80, 0.7],
              size: 10
            }
          },
          polylineSymbol: {
            type: "simple-line",
            color: [211, 132, 80, 0.7],
            width: 6
          },
          polygonSymbol: {
            type: "polygon-3d",
            symbolLayers: [
              {
                type: "fill",
                material: {
                  color: [255, 255, 255, 0.8]
                },
                outline: {
                  color: [211, 132, 80, 0.7],
                  size: "10px"
                }
              }
            ]
          },
          defaultCreateOptions: { hasZ: false }
        });
        setSketch(sketch);

      }
    });
    //console.log(sketchLayer);
  }, [graphicsLayer, sketchLayer, props.map, props.view]);

  useEffect(() => {
    loadModules(["esri/layers/GraphicsLayer"]).then(([GraphicsLayer]) => {
      if (!graphicsLayer) {
        setGraphicsLayer(new GraphicsLayer());
      }
    });
  }, [graphicsLayer, props.view]);

  useEffect(() => {
    if (sketchLayer) {
      console.log(sketchLayer)
      sketchLayer.on(["create"], (event) => {
        console.log(999);
        console.log(event.state);
        if (event.state == "complete") {
          console.log(event.graphic.geometry);
        }
      })
      props.view.ui.add(sketchLayer, "bottom-right");
      sketchLayer.create("point");
    }
  }, [sketchLayer, props.view]);

  return (
    // <div className="geometry-options" id="sketchToolBox">
    //   <button
    //     className="esri-widget--button esri-icon-map-pin geometry-button"
    //     id="point-geometry-button"
    //     value="point"
    //     title="Filter by point"

    //   ></button>
    // </div>
    null
  );
};
