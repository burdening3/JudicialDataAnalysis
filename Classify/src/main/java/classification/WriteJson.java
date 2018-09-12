package classification;

import java.util.HashMap;
import java.util.Map;

public class WriteJson {
    public static void writeWithLoc(Map<String,Integer> countbyLoc, HashMap<String,CateToJson.CateWithLoc> wordMap){
        StringBuffer jsonByLoc = new StringBuffer();
        for (String key:countbyLoc.keySet()
                ) {
            if (key.contains("null")) continue;
            jsonByLoc.append("\r\n{\r\n       \"Sector\":\""+key.split("@")[0]+"\",\r\n");
            jsonByLoc.append("       \"Company\":\""+key.split("@")[1]+"\",\r\n");
            jsonByLoc.append("       \"Country\":\""+key.split("@")[2]+"\",\r\n");
            jsonByLoc.append("       \"keywords\":"+wordMap.get(key).getTop10()+",\r\n");
            jsonByLoc.append("       \"Disputes Times\":\""+countbyLoc.get(key)+"\"\r\n},");


        }
        jsonByLoc.deleteCharAt(jsonByLoc.length()-1);
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
            jsonBySec.append("       \"Disputes Times\":\""+countbySec.get(key)+"\"\r\n},");

        }
        jsonBySec.deleteCharAt(jsonBySec.length()-1);
        FileWrite.writeFile("countbySec.txt",jsonBySec.toString());
    }

}
