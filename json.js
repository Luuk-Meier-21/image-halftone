    let json = `{
  "fields" : [
    {
      "value" : {
        "raw" : {
          "size" : {
            "_0" : {
              "w" : 16,
              "h" : 9
            }
          }
        },
        "size" : {
          "w" : 16,
          "h" : 9
        }
      },
      "label" : "Sketch window",
      "id" : 0,
      "key" : "windowSize"
    },
    {
      "value" : {
        "raw" : {
          "string" : {
            "_0" : "abpA"
          }
        },
        "string" : "abpA"
      },
      "label" : "Sketch text",
      "id" : 1,
      "key" : "text"
    },
    {
      "value" : {
        "raw" : {
          "string" : {
            "_0" : "Test"
          }
        },
        "string" : "Test"
      },
      "label" : "Label",
      "id" : 4,
      "key" : "key"
    },
    {
      "value" : {
        "raw" : {
          "float" : {
            "_0" : 200
          }
        },
        "float" : 200
      },
      "label" : "Cells",
      "id" : 5,
      "key" : "cells"
    },
    {
      "value" : {
        "raw" : {
          "float" : {
            "_0" : 0
          }
        },
        "float" : 0
      },
      "label" : "View Rotation",
      "id" : 6,
      "key" : "viewRotation"
    },
    {
      "value" : {
        "raw" : {
          "rgb" : {
            "_0" : {
              "r" : 255,
              "b" : 165,
              "g" : 82,
              "string" : "rgb(255,82,165)"
            }
          }
        },
        "rgb" : {
          "r" : 255,
          "b" : 165,
          "g" : 82,
          "string" : "rgb(255,82,165)"
        }
      },
      "label" : "Background",
      "id" : 7,
      "key" : "backgroundColor"
    },
    {
      "value" : {
        "raw" : {
          "rgb" : {
            "_0" : {
              "r" : 255,
              "b" : 28,
              "g" : 41,
              "string" : "rgb(255,41,28)"
            }
          }
        },
        "rgb" : {
          "r" : 255,
          "b" : 28,
          "g" : 41,
          "string" : "rgb(255,41,28)"
        }
      },
      "label" : "Element Color",
      "id" : 8,
      "key" : "elementColor"
    },
    {
      "value" : {
        "raw" : {
          "float" : {
            "_0" : 20
          }
        },
        "float" : 20
      },
      "label" : "Element Rotation",
      "id" : 9,
      "key" : "elementRotation"
    },
    {
      "value" : {
        "raw" : {
          "float" : {
            "_0" : 0
          }
        },
        "float" : 0
      },
      "label" : "X position",
      "id" : 10,
      "key" : "windowXPos"
    },
    {
      "value" : {
        "raw" : {
          "float" : {
            "_0" : 0
          }
        },
        "float" : 0
      },
      "label" : "Y position",
      "id" : 11,
      "key" : "windowYPos"
    },
    {
      "value" : {
        "raw" : {
          "boolean" : {
            "_0" : true
          }
        },
        "boolean" : true
      },
      "label" : "Stroke",
      "id" : 12,
      "key" : "stroke"
    },
    {
      "value" : {
        "raw" : {
          "float" : {
            "_0" : 0
          }
        },
        "float" : 0
      },
      "label" : "Scale",
      "id" : 13,
      "key" : "scale"
    },
    {
      "value" : {
        "raw" : {
          "boolean" : {
            "_0" : true
          }
        },
        "boolean" : true
      },
      "label" : "SVG Mode",
      "id" : 14,
      "key" : "svgMode"
    }
  ]
}`;
    let object = JSON.parse(json);
    const jsonToObject = (fields) => {
        let data = {};
        for(let field of fields) {
            data[field.key] = field.value;
        }
        return data;
    }
    const data = jsonToObject(object.fields);