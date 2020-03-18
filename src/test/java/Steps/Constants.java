package Steps;




import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public abstract class Constants {
    public static final String default_packageName = "com.mobilefirst.functionlibrary";
    public static final String falloutListnerPackageName = "com.mobilefirst.fallout.handler.RetryListener";
    public static final String utitlityListnerPackageName = "com.mobilefirst.reporting.Listeners";
    public static final String default_customizedTestNGReport = "com.mobilefirst.reporting.CustomizedEmailableReport";
    public static final String testsuitename = "MF Automation Test Suite";
    public static final String default_testname = "Smoke Test on device - ";
    public static String default_XML_header = "<!DOCTYPE suite SYSTEM \"http://testng.org/testng-1.0.dtd\">\n";
    public static Map<String, StringBuilder> jiraContent = new HashMap<String, StringBuilder>();
    public static Map<String, String> storeValue = new HashMap<String, String>();
    public static Map<String, Integer> storeIntValue = new HashMap<String, Integer>();
    public static StringBuilder buildJiraDesc = new StringBuilder();
    public static StringBuilder buildJiraSummary = new StringBuilder();

    public static ArrayList<Object> defectsList = new ArrayList<Object>();
    public static int testcaserownum = 0;
    public static String testEnvironment = "";
    public static String MDN = "";
    public static String Password = "";
    public static String loginType = "";
    public static String menuOption = "";
    public static String flowName = "";
}
