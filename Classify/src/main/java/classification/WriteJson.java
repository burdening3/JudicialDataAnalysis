package classification;

import java.util.HashMap;
import java.util.Map;

public class WriteJson {
    public static void writeWithLoc(Map<String,Integer> countbyLoc, HashMap<String,CateToJson.CateWithLoc> wordMap){
        StringBuffer jsonByLoc = new StringBuffer();
        for (String key:countbyLoc.keySet()
                ) {
            jsonByLoc.append("\r\n{\r\n       \"Sector\":\""+key.split("@")[0]+"\",\r\n");
            jsonByLoc.append("       \"Company\":\""+key.split("@")[1]+"\",\r\n");
            jsonByLoc.append("       \"Country\":\""+key.split("@")[2]+"\",\r\n");
            jsonByLoc.append("       \"keywords\":"+wordMap.get(key).getTop10()+",\r\n");
            jsonByLoc.append("       \"Market value $m\":\""+countbyLoc.get(key)+"\",\r\n");
            jsonByLoc.append("       \"Turnover $m\":\""+countbyLoc.get(key)+"\",\n" +
                    "        \"Net income $m\":\""+countbyLoc.get(key)+"\",\n" +
                    "        \"Total assets $m\":\"231 839,0\",\n" +
                    "        \"Employees\":\"92 600\",\n" +
                    "        \"Price $\":\"124,4\",\n" +
                    "        \"P/e ratio\":\"19,3\",\n" +
                    "        \"Dividend yield (%)\":\"1,5\",\n" +
                    "        \"Year End\":\"2014-09-27\"\r\n},");

        }
        FileWrite.writeFile("countbyLoc.txt",jsonByLoc.toString());
    }
    public  static void writeWithSec(Map<String,Integer> countbySec, HashMap<String,CateToJson.CateWithoutLoc> wordMap){
        StringBuffer jsonBySec = new StringBuffer();
        for (String key:countbySec.keySet()
                ) {
            if (key.equals("null@null")) continue;
            jsonBySec.append("\r\n{\r\n       \"Sector\":\""+key.split("@")[0]+"\",\r\n");
            jsonBySec.append("       \"Company\":\""+key.split("@")[1]+"\",\r\n");
//            jsonBySec.append("       \"Country\":\""+countbySec.get(key)+"\",\r\n");
            jsonBySec.append("       \"keywords\":"+wordMap.get(key).getTop10Words()+",\r\n");
            jsonBySec.append("       \"Market value $m\":\""+countbySec.get(key)+"\",\r\n");
            jsonBySec.append("       \"Turnover $m\":\""+countbySec.get(key)+"\",\n" +
                    "        \"Net income $m\":\""+countbySec.get(key)+"\",\n" +
                    "        \"Total assets $m\":\"231 839,0\",\n" +
                    "        \"Employees\":\"92 600\",\n" +
                    "        \"Price $\":\"124,4\",\n" +
                    "        \"P/e ratio\":\"19,3\",\n" +
                    "        \"Dividend yield (%)\":\"1,5\",\n" +
                    "        \"Year End\":\"2014-09-27\"\r\n},");

        }
        jsonBySec.deleteCharAt(jsonBySec.length()-1);
        FileWrite.writeFile("countbySec.txt",jsonBySec.toString());
    }

}
