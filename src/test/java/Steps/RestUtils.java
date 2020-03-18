package Steps;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.reporter.ExtentHtmlReporter;
import com.aventstack.extentreports.reporter.configuration.Theme;
import files.ReUsableMethods;
import org.apache.commons.lang3.RandomStringUtils;

public class RestUtils extends ReUsableMethods {

    public static String AddPlace()

    {
        return "{\r\n" +
                "  \"location\": {\r\n" +
                "    \"lat\": -38.383494,\r\n" +
                "    \"lng\": 33.427362\r\n" +
                "  },\r\n" +
                "  \"accuracy\": 50,\r\n" +
                "  \"name\": \"Sapient Sample\",\r\n" +
                "  \"phone_number\": \"(+91) 983 893 3937\",\r\n" +
                "  \"address\": \"29, side layout, cohen 09\",\r\n" +
                "  \"types\": [\r\n" +
                "    \"shoe park\",\r\n" +
                "    \"shop\"\r\n" +
                "  ],\r\n" +
                "  \"website\": \"http://sapientsample.com\",\r\n" +
                "  \"language\": \"French-IN\"\r\n" +
                "}\r\n" +
                "";


    }

    public static String getEmployee_Name()
    {
        String generatedString = RandomStringUtils.randomAlphabetic(1);
        return("John"+generatedString);

    }
    public static String getEmployee_Salary()
    {
        String generatedString = RandomStringUtils.randomAlphabetic(1);
        return("123"+generatedString);

    }
    public static String getEmployee_Age()
    {
        String generatedString = RandomStringUtils.randomAlphabetic(1);
        return("1"+generatedString);

    }

String fileName = reportLocation+"extentReport.html";
    public void ExtentReport()
    {
        extent=new ExtentReports();
        ExtentHtmlReporter htmlReporter = new ExtentHtmlReporter(fileName);
        htmlReporter.config().setTheme(Theme.DARK);
        htmlReporter.config().setDocumentTitle("API Testing");
        htmlReporter.config().setEncoding("utf-8");
        htmlReporter.config().setReportName("Sapient");
        extent.attachReporter(htmlReporter);
    }

    public void FlushReport()
    {
       extent.flush();
    }
    }
