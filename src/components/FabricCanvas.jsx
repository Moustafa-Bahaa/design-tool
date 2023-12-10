import React, { useEffect, useRef } from "react";
import { fabric } from "fabric";

const FabricCanvas = ({ backgroundImage, selectedDesign }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      width: 350,
      height: 350,
    });

    if (backgroundImage) {
      fabric.Image.fromURL(backgroundImage, (img) => {
        img.scaleToWidth(canvas.width);
        img.scaleToHeight(canvas.height);
        canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));

        if (selectedDesign) {
          fabric.Image.fromURL(selectedDesign, (img) => {
            img.set({
              selectable: true,
              hasControls: true,
              zIndex: 1,
            });
            const maxWidth = 150;
            const scale = maxWidth / img.width;
            img.scale(scale);
            img.center();
            canvas.add(img);
            canvas.renderAll();
          });
        }
      });
    }

    return () => {
      canvas.dispose();
    };
  }, [backgroundImage, selectedDesign]);

  return (
    <>
      <canvas ref={canvasRef} />
    </>
  );
};

export default FabricCanvas;
