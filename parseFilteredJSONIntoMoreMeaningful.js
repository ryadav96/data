function convertFinancialStatement(financialStatement) {
  // Create a new object to store the converted financial statement
  const convertedFinancialStatement = {};

  // Get an array of all the keys in the financial statement object
  const keys = Object.keys(financialStatement);

  // Iterate over the array of keys
  keys.forEach((key) => {
    // Convert the key name to a more meaningful name
    let newKey;
    switch (key) {
      case "DateOfBoardMeetingWhenFinancialResultsWereApproved":
        newKey = "dateOfBoardMeeting";
        break;
      case "ReportingQuarter":
        newKey = "reportingQuarter";
        break;
      case "IsCompanyReportingMultisegmentOrSingleSegment":
        newKey = "isCompanyReportingMultisegment";
        break;
      case "DescriptionOfSingleSegment":
        newKey = "descriptionOfSingleSegment";
        break;
      case "WhetherResultsAreAuditedOrUnaudited":
        newKey = "whetherResultsAreAudited";
        break;
      case "NatureOfReportStandaloneConsolidated":
        newKey = "natureOfReport";
        break;
      case "RevenueFromOperations":
        newKey = "revenueFromOperations";
        break;
      case "OtherIncome":
        newKey = "otherIncome";
        break;
      case "Income":
        newKey = "income";
        break;
      case "CostOfMaterialsConsumed":
        newKey = "costOfMaterialsConsumed";
        break;
      case "PurchasesOfStockInTrade":
        newKey = "purchasesOfStockInTrade";
        break;
      case "ChangesInInventoriesOfFinishedGoodsWorkInProgressAndStockInTrade":
        newKey = "changesInInventories";
        break;
      case "EmployeeBenefitExpense":
        newKey = "employeeBenefitExpense";
        break;
      case "FinanceCosts":
        newKey = "financeCosts";
        break;
      case "DepreciationDepletionAndAmortisationExpense":
        newKey = "depreciationExpense";
        break;
      case "OtherExpense":
        newKey = "otherExpense";
        break;
      case "ProfitLossBeforeTax":
        newKey = "profitBeforeTax";
        break;
      case "TaxExpense":
        newKey = "taxExpense";
        break;
      case "ProfitLossForThePeriod":
        newKey = "profit";
        break;
      case "OtherComprehensiveIncome":
        newKey = "otherComprehensiveIncome";
        break;
      case "TotalComprehensiveIncome":
        newKey = "totalComprehensiveIncome";
        break;
      case "TotalComprehensiveIncomeAttributableTo":
        newKey = "totalComprehensiveIncomeAttributableTo";
        break;
      case "EarningsPerEquityShareBasic":
        newKey = "earningsPerShareBasic";
        break;
      case "EarningsPerEquityShareDiluted":
        newKey = "earningsPerShareDiluted";
        break;
      default:
        newKey = key;
    }

    // Check if the key should be included in the converted financial statement
    if (
      newKey === "dateOfBoardMeeting" ||
      newKey === "reportingQuarter" ||
      newKey === "isCompanyReportingMultisegment" ||
      newKey === "descriptionOfSingleSegment" ||
      newKey === "whetherResultsAreAudited" ||
      newKey === "natureOfReport" ||
      newKey === "revenueFromOperations" ||
      newKey === "otherIncome" ||
      newKey === "income" ||
      newKey === "costOfMaterialsConsumed" ||
      newKey === "purchasesOfStockInTrade" ||
      newKey === "changesInInventories" ||
      newKey === "employeeBenefitExpense" ||
      newKey === "financeCosts" ||
      newKey === "depreciationExpense" ||
      newKey === "otherExpense" ||
      newKey === "profitBeforeTax" ||
      newKey === "taxExpense" ||
      newKey === "profit" ||
      newKey === "otherComprehensiveIncome" ||
      newKey === "totalComprehensiveIncome" ||
      newKey === "totalComprehensiveIncomeAttributableTo" ||
      newKey === "earningsPerShareBasic" ||
      newKey === "earningsPerShareDiluted"
    ) {
      // Add the key-value pair to the converted financial statement object
      convertedFinancialStatement[newKey] = financialStatement[key];
    }
  });

  return convertedFinancialStatement;
}
