import { Box, styled } from "@mui/system";
import { Components, StylesConfig, Styles as TwapStyles } from "@orbs-network/twap-ui";

// Styles configuration
export const stylesConfig: StylesConfig = {
  iconsColor: "#60E6C5",
  textColor: "white",
  tooltipBackground: "rgba(32, 32, 34, 0.9)",
  tooltipTextColor: "#60E6C5",
  spinnerColor: "white",
  containerBackground: "rgb(16, 23, 38)",
  cardBackground: "#18202F",
  progressBarColor: "#60E6C5",
  progressBarTrackColor: "#373E55",
  orderHistorySelectedTabBackground: "rgba(96, 230, 197, 0.26)",
  orderHistoryTabColor: "white",
  orderHistorySelectedTabColor: "rgb(96, 230, 197)",
};

export const Text = styled(TwapStyles.StyledText)({});

export const StyledSlider = styled(Box)({
  flex: 1,
  paddingLeft: 30,
  paddingRight: 10,
  position: "relative",
  top: 2,
});

export const StyledOrderConfirmation = styled(Box)({
  "& .output-text": {
    textAlign: "center",
    width: "100%",
    fontSize: 15,
  },
});

export const StyledLimitPrice = styled(Box)({
  width: "100%",
  "& .right": {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  "& .twap-token-logo": {
    width: 22,
    height: 22,
  },
});

export const StyledTokenOrder = styled(Box)({ width: "100%" });

export const StyledTrade = styled(Box)({
  width: "100%",
  "& .twap-input": {
    textAlign: "right",
    paddingRight: 10,
  },
});



export const StyledPercentSelector = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 5,
  width: "100%",
});


export const StyledIntervalTimeSelect = styled(Box)({
  flex: 1,
});


export const StyledTokenDisplay = styled(TwapStyles.StyledRowFlex)({
  alignItems: "center",
  gap: 6,
  width: "fit-content",
  fontFamily: "inherit",
});

export const StyledFlexStart = styled(TwapStyles.StyledRowFlex)({
  justifyContent: "flex-start",
  gap: 10,
});

export const StyledChangeOrder = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
}));

export const StyledTokenPanel = styled(Box)({
  width: "100%",
  ".twap-input": {
    "& input": {
      fontSize: 24,
      fontWeight: 400,
      textAlign: "left",
      outline: "1px solid transparent",
      borderRadius: "0.375rem",
      height: 40,
      transition: "0.2s all",
      "&:focus": {
        outline: "1px solid #1D9391",
      },
      "&::placeholder": {},
    },
  },
  "& .twap-token-logo": {
    width: "28px!important",
    height: "28px!important",
  },
  "& .twap-token-name": {
    fontSize: 22,
  },
});

export const StyledTradeSize = styled(Box)({
  maxWidth: "80%",
  display: "flex",
  alignItems: "center",
  gap: 10,

  "& .twap-label": {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  "& .twap-token-logo": {
    width: 20,
    height: 20,
  },
  "& .twap-token-name": {
    fontSize: 16,
  },
});

export const StyledSummaryRow = styled(TwapStyles.StyledRowFlex)({
  justifyContent: "space-between",
  "& p": {
    fontSize: 14,
  },
  "& .twap-label": {
    fontSize: 14,
  },
});

export const StyledTotalTradesInput = styled(Components.NumericInput)({
  width: 70,
  flex: "unset!important",
  "& input": {
    fontSize: 16,
    textAlign: "center",
  },
});

export const StyledSliderContainer = styled(TwapStyles.StyledRowFlex)({
  height: 30,
  justifyContent: "space-between",
});

export const StyledTokenOrderPreviewAmount = styled(Components.SmallLabel)({
  fontSize: 19,
});

export const configureStyles = () => {
  return {
    ".twap-limit-price": {
      width: "100%",
      ".twap-price": {
        background: "#0D1321",
        padding: 10,
        borderRadius: 10,
        gap: 10,
      },
      ".twap-input": {
        textAlign: "center" as const,
      },
    },
    ".twap-percent-button": {
      height: 22,
      width: "25%",
      border: "unset",
      borderRadius: 4,
      cursor: "pointer",
      transition: "0.2s all",
      background: "rgb(55, 65, 81)",
      "&:hover": {
        background: "rgba(100, 221, 192, 0.15)",
        color: "rgb(96, 230, 197)",
      },
    },
    ".twap-token-select": {
      background: "transparent",
      border: "unset",
      padding: "6px",
      borderRadius: 2,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: 5,
      marginLeft: 10,
    },
    ".twap-market-price": {
      "& .twap-card": {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        background: "#0D1321",
        paddingBottom: 5,
      },
      "& .title": {
        fontSize: 13,
        opacity: 0.8,
      },
    },
    ".twap-icon": {
      "& *": {
        color: `${stylesConfig.iconsColor}!important`,
      },
    },
    ".twap-tooltip": {
      "& .MuiTooltip-tooltip": {
        backgroundColor: stylesConfig.tooltipBackground,
        borderRadius: "4px",
        color: stylesConfig.tooltipTextColor,
        fontSize: 14,
        fontFamily: "inherit",
        lineHeight: 1.5,
        maxWidth: 400,
        padding: 10,
        "& *": {
          color: stylesConfig.tooltipTextColor,
          fontSize: 14,
        },
      },
      "& .MuiTooltip-arrow": {
        color: stylesConfig.tooltipBackground,
      },
    },
    ".twap-loader": {
      backgroundColor: `${stylesConfig.skeletonLoaderBackground || "rgba(255,255,255, 0.1)"}!important`,
    },
    ".twap-modal": {
      background: "rgba(0,0,0, 0.8)",
      fontFamily: "Jost",
      color: stylesConfig.textColor,
      "& *": {
        color: stylesConfig.textColor,
      },
    },
    ".twap-button-loader": {
      color: stylesConfig.spinnerColor,
    },
    ".twap-time-selector": {
      "& input": {
        "&::placeholder": {
          color: "rgba(255,255,255, 0.5)!important",
        },
      },
    },
    ".twap-time-selector-list": {
      background: stylesConfig.containerBackground,
      border: `1px solid ${stylesConfig.borderColor || "transparent"}`,
      right: 0,
    },
    ".twap-card": {
      padding: 12,
      background: stylesConfig.cardBackground,
      borderRadius: "0.375rem",
    },
    ".twap-container": {
      display: "flex",
      gap: 15,
      marginTop: 20,
      "*": {
        color: stylesConfig.textColor,
        fontFamily: "inherit!important",
      },
    },
    ".twap-small-label": {
      fontSize: 14,
      opacity: 1,
    },
    ".twap-slider": {
      "& .MuiSlider-valueLabel": {
        background: stylesConfig.tooltipBackground,
      },
      "& .MuiSlider-valueLabelLabel": {
        color: stylesConfig.tooltipTextColor,
      },
      "& .MuiSlider-thumb": {
        background: stylesConfig.iconsColor,
      },
    },
    ".twap-change-order": {
      width: 50,
      height: 50,
    },
    ".twap-token-name": {
      fontSize: 18,
    },
    ".twap-token-logo": {
      width: 28,
      height: 28,
    },
    ".twap-switch": {
      "& .MuiSwitch-thumb": {
        background: "white",
      },
      "& .MuiSwitch-track": {
        background: `${stylesConfig.containerBackground}!important`,
        opacity: "1!important",
      },
      "& .Mui-checked+.MuiSwitch-track": {
        backgroundColor: `${stylesConfig.containerBackground}!important`,
        opacity: "1!important",
      },
      "& .Mui-checked .MuiSwitch-thumb": {
        background: stylesConfig.iconsColor,
      },
    },
    ".twap-order": {
      border: "1px solid rgb(55, 65, 81)",
      "& .twap-order-expanded-colored": {
        background: "rgb(60, 64, 78)",
      },
      "& .twap-order-progress": {
        "&::after": {
          background: `${stylesConfig.progressBarTrackColor}!important`,
        },
        "& .MuiLinearProgress-bar": {
          background: stylesConfig.progressBarColor,
        },
      },
    },
    ".twap-orders-header": {
      "& .twap-orders-header-tabs": {
        "& .MuiTabs-indicator": {
          backgroundColor: stylesConfig.orderHistorySelectedTabBackground,
        },
        "& .MuiButtonBase-root": {
          color: stylesConfig.orderHistoryTabColor,
          fontWeight: 400,
        },
        "& .Mui-selected": {
          color: stylesConfig.orderHistorySelectedTabColor,
        },
      },
    },
    ".twap-orders-lists": {
      maxHeight: 600,
    },
    ".twap-usd": {
      opacity: 0.6,
    },
    "& .twap-balance": {
      "& *": {
        color: "#D1D5DB",
      },
    },
    ".twap-input": {
      "& input": {
        fontFamily: "inherit",

        fontWeight: 400,
        outline: "1px solid transparent",
        borderRadius: "0.375rem",
        transition: "0.2s all",
        height: 35,
        "&:focus": {
          outline: "1px solid #1D9391",
        },
      },
    },
    ".twap-button": {
      height: 40,
      borderRadius: 4,
      background: "rgb(29, 147, 132)",
      "& *": {
        color: "white",
        fontWeight: 500,
        fontSize: 16,
      },
    },

    ".twap-modal-content": {
      background: stylesConfig.containerBackground,

      maxHeight: "85vh",
      overflow: "auto",
      borderRadius: "10px",
      padding: 15,
      paddingTop: 30,
      "& a": {
        color: "white",
        fontWeight: 500,
        textDecoration: "underline",
      },
      "& .MuiIconButton-root": {
        color: "white",
      },
      "& *": {
        fontFamily: "inherit",
      },
    },
  };
};
