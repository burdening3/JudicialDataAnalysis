package classification;

import java.util.*;

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

    public static void writeDateCSV(Map<String,Map<String,Integer>> map) {
        StringBuffer CSVbyDate = new StringBuffer();
        for (Map.Entry<String,Map<String,Integer>> entry : map.entrySet()) {
            String name = entry.getKey();
            if (entry.getKey().contains("null")) continue;
//            for (Map.Entry<String, Integer> entry2 : entry.getValue().entrySet()) {
//                int year = Integer.parseInt(entry2.getKey().split("/")[0]);
//                int  month = Integer.parseInt( entry2.getKey().split("/")[1] );
//                int count = 12*(year-2015)+ month -5 +2001;

                List<Map.Entry<String,Integer>> list = new ArrayList<Map.Entry<String,Integer>>(entry.getValue().entrySet());
                //然后通过比较器来实现排序
                Collections.sort(list,new Comparator<Map.Entry<String,Integer>>() {
                    //升序排序
                    public int compare(Map.Entry<String, Integer> o1,
                                       Map.Entry<String, Integer> o2) {
                        return o1.getKey().replace("/10","a").replace("/11","b").replace("/12","c").compareTo(o2.getKey().replace("/10","a").replace("/11","b").replace("/12","c"));
                    }

                });

                for(Map.Entry<String,Integer> mapping:list){
                    System.out.println(name+","+mapping.getValue()+","+mapping.getKey());
                    CSVbyDate.append(name+","+mapping.getValue()+","+mapping.getKey()+"\r\n");

                }
//                CSVbyDate.append(name+","+entry2.getValue().toString()+","+entry2.getKey()+","+count+"\r\n");
//                CSVbyDate.append(name+","+entry2.getValue().toString()+","+count+"\r\n");
//            }
        }
        FileWrite.writeFile("countbyDate.csv",CSVbyDate.toString());

    }

}
