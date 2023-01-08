function convertFinancialStatement(financialStatement) {
    // Create a new object to store the converted financial statement
    const convertedFinancialStatement = {};
  
    // Set the date property
    if (financialStatement.DateOfBoardMeetingWhenFinancialResultsWereApproved) {
      convertedFinancialStatement.date = financialStatement.DateOfBoardMeetingWhenFinancialResultsWereApproved[0]._;
    }
  
    // Set the reportedCurrency property
    if (financialStatement.RevenueFromOperations && financialStatement.RevenueFromOperations[0].$ && financialStatement.RevenueFromOperations[0].$.unitRef) {
      convertedFinancialStatement.reportedCurrency = financialStatement.RevenueFromOperations[0].$.unitRef;
    }
  
    // Set the revenue property
    if (financialStatement.RevenueFromOperations) {
      convertedFinancialStatement.revenue = Number(financialStatement.RevenueFromOperations[0]._);
    }
  
    if (financialStatement.CostOfMaterialsConsumed) {
        convertedFinancialStatement.costOfRevenue = Number(financialStatement.CostOfMaterialsConsumed[0]._) + Number(financialStatement.PurchasesOfStockInTrade[0]._) + Number(financialStatement.ChangesInInventoriesOfFinishedGoodsWorkInProgressAndStockInTrade[0]._) + Number(financialStatement.EmployeeBenefitExpense[0]._) + Number(financialStatement.FinanceCosts[0]._) + Number(financialStatement.DepreciationDepletionAndAmortisationExpense[0]._) + Number(financialStatement.OtherExpenses[0]._);
      }
    // Set the grossProfit property and grossProfitRatio property
     // Set the grossProfit property and grossProfitRatio property
  if (convertedFinancialStatement.revenue && convertedFinancialStatement.costOfRevenue) {
    convertedFinancialStatement.grossProfit = convertedFinancialStatement.revenue - convertedFinancialStatement.costOfRevenue;
    if (convertedFinancialStatement.revenue > 0) {
      convertedFinancialStatement.grossProfitRatio = convertedFinancialStatement.grossProfit / convertedFinancialStatement.revenue;
    }
  }

  // Set the researchAndDevelopmentExpenses property
  if (financialStatement.ResearchAndDevelopmentExpenses) {
    convertedFinancialStatement.researchAndDevelopmentExpenses = Number(financialStatement.ResearchAndDevelopmentExpenses[0]._);
  }

  // Set the generalAndAdministrativeExpenses property
  if (financialStatement.GeneralAndAdministrativeExpenses) {
    convertedFinancialStatement.generalAndAdministrativeExpenses = Number(financialStatement.GeneralAndAdministrativeExpenses[0]._);
  }

  // Set the sellingAndMarketingExpenses property
  if (financialStatement.SellingAndMarketingExpenses) {
    convertedFinancialStatement.sellingAndMarketingExpenses = Number(financialStatement.SellingAndMarketingExpenses[0]._);
  }

  // Set the sellingGeneralAndAdministrativeExpenses property
  if (financialStatement.SellingGeneralAndAdministrativeExpenses) {
    convertedFinancialStatement.sellingGeneralAndAdministrativeExpenses = Number(financialStatement.SellingGeneralAndAdministrativeExpenses[0]._);
  }

  // Set the otherExpenses property
  if (financialStatement.OtherExpenses) {
    convertedFinancialStatement.otherExpenses = Number(financialStatement.OtherExpenses[0]._);
  }

  // Set the operatingExpenses property
  if (convertedFinancialStatement.researchAndDevelopmentExpenses || convertedFinancialStatement.generalAndAdministrativeExpenses || convertedFinancialStatement.sellingAndMarketingExpenses || convertedFinancialStatement.sellingGeneralAndAdministrativeExpenses || convertedFinancialStatement.otherExpenses) {
    convertedFinancialStatement.operatingExpenses = (convertedFinancialStatement.researchAndDevelopmentExpenses || 0) + (convertedFinancialStatement.generalAndAdministrativeExpenses || 0) + (convertedFinancialStatement.sellingAndMarketingExpenses || 0) + (convertedFinancialStatement.sellingGeneralAndAdministrativeExpenses || 0) + (convertedFinancialStatement.otherExpenses || 0);
  }

  // Set the costAndExpenses property
  if (convertedFinancialStatement.costOfRevenue && convertedFinancialStatement.operatingExpenses) {
    convertedFinancialStatement.costAndExpenses = convertedFinancialStatement.costOfRevenue + convertedFinancialStatement.operatingExpenses;
  }

  // Set the interestIncome property
  if (financialStatement.InterestIncome) {
    convertedFinancialStatement.interestIncome = Number(financialStatement.InterestIncome[0]._);
  }

  // Set the interestExpense property
  if (financialStatement.InterestExpense) {
    convertedFinancialStatement.interestExpense = Number(financialStatement.InterestExpense[0]._);
  }

  if (financialStatement.DepreciationDepletionAndAmortisationExpense) {
    convertedFinancialStatement.depreciationAndAmortization = Number(financialStatement.DepreciationDepletionAndAmortisationExpense[0]._);
  }

  // Set the ebitda property and ebitdaratio property
  if (convertedFinancialStatement.operatingIncome && convertedFinancialStatement.depreciationAndAmortization) {
    convertedFinancialStatement.ebitda = convertedFinancialStatement.operatingIncome + convertedFinancialStatement.depreciationAndAmortization;
    if (convertedFinancialStatement.revenue > 0) {
      convertedFinancialStatement.ebitdaratio = convertedFinancialStatement.ebitda / convertedFinancialStatement.revenue;
    }
  }

  // Set the totalOtherIncomeExpensesNet property
  if (financialStatement.TotalOtherIncomeExpensesNet) {
    convertedFinancialStatement.totalOtherIncomeExpensesNet = Number(financialStatement.TotalOtherIncomeExpensesNet[0]._);
  }

  // Set the incomeBeforeTax property and incomeBeforeTaxRatio property
  if (convertedFinancialStatement.operatingIncome && convertedFinancialStatement.totalOtherIncomeExpensesNet) {
    convertedFinancialStatement.incomeBeforeTax = convertedFinancialStatement.operatingIncome + convertedFinancialStatement.totalOtherIncomeExpensesNet;
    if (convertedFinancialStatement.revenue > 0) {
      convertedFinancialStatement.incomeBeforeTaxRatio = convertedFinancialStatement.incomeBeforeTax / convertedFinancialStatement.revenue;
    }
  }

  // Set the incomeTaxExpense property
  if (financialStatement.IncomeTaxExpense) {
    convertedFinancialStatement.incomeTaxExpense = Number(financialStatement.IncomeTaxExpense[0]._);
  }

  // Set the netIncome property and netIncomeRatio property
  if (convertedFinancialStatement.incomeBeforeTax && convertedFinancialStatement.incomeTaxExpense) {
    convertedFinancialStatement.netIncome = convertedFinancialStatement.incomeBeforeTax - convertedFinancialStatement.incomeTaxExpense;
    if (convertedFinancialStatement.revenue > 0) {
      convertedFinancialStatement.netIncomeRatio = convertedFinancialStatement.netIncome / convertedFinancialStatement.revenue;
    }
  }

  // Set the eps property
  if (financialStatement.EarningsPerEquityShareBasic) {
    convertedFinancialStatement.eps = Number(financialStatement.EarningsPerEquityShareBasic[0]._);
  }

  // Set the epsdiluted property
  if (financialStatement.EarningsPerEquityShareDiluted) {
    convertedFinancialStatement.epsdiluted = Number(financialStatement.EarningsPerEquityShareDiluted[0]._);
  }

  // Set the weightedAverageShsOut property
  if (financialStatement.WeightedAverageNumberOfEquitySharesOutstandingBasic) {
    convertedFinancialStatement.weightedAverageShsOut = Number(financialStatement.WeightedAverageNumberOfEquitySharesOutstandingBasic[0]._);
  }

  // Set the weightedAverageShsOutDil property
  if (financialStatement.WeightedAverageNumberOfEquitySharesOutstandingDiluted) {
    convertedFinancialStatement.weightedAverageShsOutDil = Number(financialStatement.WeightedAverageNumberOfEquitySharesOutstandingDiluted[0]._);
  }

  return convertedFinancialStatement;
}

