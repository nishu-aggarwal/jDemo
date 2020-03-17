package files;

import io.restassured.path.json.JsonPath;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class ReUsableMethods {

	
	public static JsonPath rawToJson(String response)
	{
		JsonPath js1 =new JsonPath(response);
		return js1;
	}

	public static String loadPropertiesFile(String attributeName) throws IOException {
		InputStream inputStream;
		Properties prop = new Properties();
		String propFileName = "config.properties";

		inputStream = ReUsableMethods.class.getClassLoader().getResourceAsStream(propFileName);

		if (inputStream != null) {
			prop.load(inputStream);
		} else {
			throw new FileNotFoundException("property file '" + propFileName + "' not found in the classpath");
		}
		String val = prop.getProperty(attributeName);
return val;
	}
}
