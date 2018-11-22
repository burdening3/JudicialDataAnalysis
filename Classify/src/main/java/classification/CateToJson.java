package classification;

import java.lang.reflect.Array;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

import static classification.CateToJson.CateWithLoc.countTop10Words;

public class CateToJson {
    public static class CateWithLoc{
        String Sector;
        String Name;
        String SecNameLoc;
        String Location;
        HashMap<String ,Integer> WordsCount;
        List<String> Top10 = new ArrayList<>();
        CateWithLoc(String tmp){
            Name = tmp.split("@")[1];
            Sector = tmp.split("@")[0];
            Location = tmp.split("@")[2];
            SecNameLoc = tmp;
            WordsCount = new HashMap<>();
        }
        public void AddWords(List<String> wordlist){
            addWord(wordlist, WordsCount);
        }

        public String getTop10(){
            StringBuffer tmp = new StringBuffer();
            Top10 = countTop10Words(WordsCount);
            tmp.append(Top10.toString().replace("]","\r\n\t\t\t\t}").replace("[","{").replace(", ",",\r\n\t\t\t"));
            return tmp.toString();
        }


        public static List<String> countTop10Words(HashMap<String,Integer> map){
            List<String> top10 = new ArrayList<>();
            List<Map.Entry<String,Integer>> list = new ArrayList<Map.Entry<String,Integer>>(map.entrySet());
            Collections.sort(list,new Comparator<Map.Entry<String,Integer>>(){

                public int compare(Map.Entry<String, Integer> o1, Map.Entry<String, Integer> o2) {
                    return o2.getValue() - o1.getValue();  //降序
                }
            });

            for (int i = 0; i < Math.min(50,list.size()); i++) {
                top10.add("\""+list.get(i).getKey()+"\":\""+list.get(i).getValue()+"\"");
            }
            return top10;
        }
        private static void addWord(List<String> wordlist, HashMap<String, Integer> wordsCount) {
            for (String word:wordlist
                    ) {
                if (word.length()<=1) continue;
                if (wordsCount.get(word)!=null){
                    wordsCount.put(word, wordsCount.get(word) + 1);
                }else {
                    wordsCount.put(word,1);
                }
            }
        }
    }
    public static class CateWithoutLoc{
        String Sector;
        String Name;
        String SecName;
        HashMap<String ,Integer> WordsCount;
        List<String> Top10 = new ArrayList<>();
        CateWithoutLoc(String name,String sector){
            Name = name;
            Sector = sector;
            SecName = sector+"@"+name;
            WordsCount = new HashMap<>();
        }
        CateWithoutLoc(String tmp){
            Name = tmp.split("@")[1];
            Sector = tmp.split("@")[0];
            SecName = tmp;
            WordsCount = new HashMap<>();
        }
        public void AddWords(List<String> wordlist){
            CateWithLoc.addWord(wordlist, WordsCount);
        }


        public String getTop10Words(){
            StringBuffer tmp = new StringBuffer();
            Top10 = countTop10Words(WordsCount);
            tmp.append(Top10.toString().replace("]","\r\n\t\t\t\t}").replace("[","\r\n\t\t\t\t{").replace(", ",",\r\n\t\t\t\t"));
            return tmp.toString();
        }

    }
    public static class disputes{
        boolean ishaveName;
        boolean ishaveSector;
        HashMap<String,Integer> CateMap;
        String Location;
        String Sector;
        String Name;
        List<String> Data;
        List<String> Words;
        Date date;
        boolean CivilFlag = true;
        boolean haveCivil = false;
        boolean CriminalFlag = false;
        boolean HouseFlag = false;
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd HH:mm");
        public String getMonth(){
            try{
                Calendar calendar = Calendar.getInstance();//日历对象
                calendar.setTime(date);//设置当前日期
                return calendar.get(Calendar.YEAR)+"/"+String.valueOf(calendar.get(Calendar.MONTH)+1);
            }catch (Exception e){
                System.out.println(e+"###"+Words.toString());
                return "error";
            }
        }
        disputes(String data,String datein,String location,String words)  {
            CateMap = new HashMap<>();
            ishaveName = false;
            ishaveSector = false;
            String[] tmp1 = data.split(",");
            String[] tmp2 = words.replace("[","").replace("]","").split(",");
            Data = new ArrayList<>();
            Words = new ArrayList<>();
            for (String word:tmp1
                    ) {
                Data.add(word.replace("[","").replace("]","").trim());
            }
            for (String word:tmp2
                 ) {
                Words.add(word.trim());
            }
            Location = location;
            try {
                date = sdf.parse(datein);
            }catch (ParseException e){
                System.out.println(e.getMessage());
            }



        }
        public void sortDis(){
            if (Sector == null) {
                return;
            }
            String[] secArr = Sector.split("\r\n");
            String[] nameArr = Name.split("\r\n");
            int size =Sector.split("\r\n").length;
            System.out.println(size);
            for (int i = 0; i < size; i++) {
                if(CateMap.get( secArr[i]+"@"+nameArr[i] )!=null){
                    CateMap.put(secArr[i]+"@"+nameArr[i],CateMap.get(secArr[i]+"@"+nameArr[i]) + 1);
                }else {
                    CateMap.put(secArr[i]+"@"+nameArr[i],1);
                }

            }
        }
        public void sortByRules(){
            List<String> tmplist = new ArrayList<>();
            for (String key:CateMap.keySet()
                    ) {
                tmplist.add(key);
                if (key.contains("房产")) HouseFlag = true;
                if(key.contains("治安")) CriminalFlag = true;
                if(key.contains("民事")) haveCivil = true;
                if (!key.contains("民事")) CivilFlag = false;
            }
            if (CateMap.size()==1) {

                Sector = tmplist.get(0).split("@")[0];
                Name = tmplist.get(0).split("@")[1];
            }else {
                if(CriminalFlag) {
                    sortCriminal();
                    return;
                }
//                if (HouseFlag && haveCivil) {
//                    sortCivil();
//                    return;
//                }
//                if (CivilFlag) {
//                    sortCivil();
//                }

                //按次数排序
                List<Map.Entry<String,Integer>> list = new ArrayList<Map.Entry<String,Integer>>(CateMap.entrySet());
                Collections.sort(list,new Comparator<Map.Entry<String,Integer>>(){

                    public int compare(Map.Entry<String, Integer> o1, Map.Entry<String, Integer> o2) {
                        return o2.getValue() - o1.getValue();  //降序
                    }
                });
                if (list.size()>=2 && list.get(0).getKey().equals("民事@邻里纠纷")) list.remove(0);
                if (list.size()>=2 && list.get(0).getKey().equals("交通事故纠纷@一般交通事故")) list.remove(0);
                Sector = list.get(0).getKey().split("@")[0];
                Name = list.get(0).getKey().split("@")[1];


            }
        }
        public void sortCivil(){
            Sector = "民事";
            Name = Name.replace("邻里纠纷","").replace("房屋租赁纠纷","").trim();
            if (Name.contains("污水")) Name = "污水漏水纠纷";
            if (Name.contains("赡养")&&Name.contains("家庭")) Name = "赡养纠纷";
            if (Name.contains("婚姻")&&Name.contains("家庭")) Name = "婚姻纠纷";
            if (Name.contains("遗产")) Name = "遗产继承纠纷";
            if (Name.contains("拆迁")) Name = "征地拆迁纠纷";
            if (Name.contains("宠物")) Name = "宠物纠纷";
            if (Name.length()==0 && Name==null) Name = "其他民事";
        }
        public void sortCriminal(){
            Sector = "治安";
            Name = "治安案件";
        }

        public void setData(List<String> data) {
            Data = data;
        }
        public void setLocation(String location) {
            Location = location;
        }
        public void setDate(Date date) {
            this.date = date;
        }
        public void setName(String name) {
            if (ishaveName){
                Name = Name+"\r\n"+name;
            }else {
                Name = name;
                ishaveName = true;
            }

        }
        public void setSector(String sector) {
            if (ishaveSector){
                Sector = Sector+"\r\n"+sector;
            }else {
                Sector = sector;
                ishaveSector = true;
            }
        }
        public Date getDate() {
            return date;
        }
        public String getLocation() {
            return Location;
        }
        public List<String> getData() {
            return Data;
        }
        public String getName() {
            return Name;
        }
        public String getSector() {
            return Sector;
        }
        public List<String> getWords(){return Words;}
    }
    public static HashMap ReadMap(String tmp){
        StringBuffer stringBuffer = new StringBuffer();
        HashMap<String,List<String>> map = new HashMap<>();

        for (String line:tmp.split("\r\n")
                ) {
            if (line.length()==0) continue;
            if (line.contains("|")){
                stringBuffer.append(line.substring(0,line.indexOf("|"))+"\r\n");
                continue;
            }
            stringBuffer.append(line+"\r\n");
        }
        int tmpflag = 0;
        String Sector = new String();
        String Name = new String();
        boolean flag = false;
        boolean endflag = false;
        List<String> tmplist = new ArrayList<>();
        while (tmpflag<stringBuffer.length()-3){
            String tmpStr = new String();
            int aaa = stringBuffer.indexOf("///",tmpflag+2);
            //if (aaa<0) break;
            if (aaa>0){
                tmpStr = stringBuffer.substring(tmpflag,aaa);
                //System.out.println(tmpStr+"*****\r\n");
                tmpflag = stringBuffer.indexOf("///",tmpflag+2);
            }else{
                tmpStr = stringBuffer.substring(tmpflag,stringBuffer.length()-1);
                endflag = true;
            }


            for (String line2:tmpStr.split("\r\n")
                    ) {
                if (line2.contains("///")) {
                    if (flag == true){
                        map.put(Sector+"@"+Name,tmplist);
                        tmplist = new ArrayList<>();
                        flag = false;
                    }
                    Sector = line2.substring(line2.indexOf("///")+3);
                    continue;
                }
                if (line2.contains("//")){
                    if (flag==true) {
                        map.put(Sector+"@"+Name,tmplist);
                        tmplist = new ArrayList<>();
                        flag = false;
                    }
                    Name = line2.substring(line2.indexOf("//")+2);
                    continue;
                }
                tmplist.add(line2);
                flag = true;

            }
            if (endflag==true) break;
        }
        return map;
    }
    public static HashMap CountBySector(List<disputes> disIn){
        HashMap<String,Integer> outmap = new HashMap<>();
        for (disputes dis:disIn
                ) {
            String words = dis.getSector()+"@"+dis.getName();
            if (outmap.get(words) != null){
                outmap.put(words,outmap.get(words) + 1);
            }else {
                outmap.put(words,1);
            }

        }
        return outmap;
    }
    public static HashMap CountByLocation(List<disputes> disIn){
        HashMap<String,Integer> outmap = new HashMap<>();
        for (disputes dis:disIn
                ) {
            String words = dis.getSector()+"@"+dis.getName()+"@"+dis.getLocation();
            if (outmap.get(words) != null){
                outmap.put(words,outmap.get(words) + 1);
            }else {
                outmap.put(words,1);
            }

        }
        return outmap;
    }
    public static HashMap CountWordsBySector(Map<String,Integer> map,List<disputes> disIn,Map<String,CateWithoutLoc> cateMap){
        HashMap<String,Integer> wordsCount = new HashMap<>();
        for (String key:map.keySet()
             ) {
            String name = new String();
            String sector = new String();
            name = key.split("@")[1];
            sector = key.split("@")[0];
            for (disputes d:disIn
                 ) {
                if(name.equals(d.getName())&&sector.equals(d.getSector())){
                    try {
                        cateMap.get(key).AddWords(d.getWords());
                    }catch (Exception e){
                        System.out.println(e);
                    }

                }
            }

        }
        return wordsCount;
    }

    public static HashMap CountWordsByLocation(Map<String ,Integer> map, List<disputes> disIn, Map<String,CateWithLoc> cateMap){
        HashMap<String,Integer> wordsCount = new HashMap<>();
        for (String key:map.keySet()
                ) {
            String name = new String();
            String sector = new String();
            String location = new String();
            name = key.split("@")[1];
            sector = key.split("@")[0];
            location = key.split("@")[2];
            for (disputes d:disIn
                    ) {
                if(name.equals(d.getName())&&sector.equals(d.getSector())&&location.equals(d.getLocation())){
                    try {
                        cateMap.get(key).AddWords(d.getWords());
                    }catch (Exception e){
                        System.out.println(e);
                    }

                }
            }

        }
        return wordsCount;
    }

    public static void main(String[] args) {
        String Categories = FileWrite.txt2String("data+cate.csv");
        List<disputes> dis = new ArrayList<>();
        for (String line:Categories.split("\r\n")
                ) {
            if (line.length()==0) continue;
            String[] tmp = line.split("\t");
            dis.add(new disputes(tmp[0],tmp[1],tmp[2],tmp[3]));//将所有纠纷取读致List dis
        }

        HashMap<String,List<String>> map = ReadMap(FileWrite.txt2String("keyMap.txt"));
        for (int i = 0; i < dis.size(); i++) {
            for (String word:dis.get(i).getData()
                    ) {
                for (String key:map.keySet()
                        ) {
                    if (map.get(key).contains(word)){
                        String[] temp = key.split("@");
                        dis.get(i).setSector(temp[0]);
                        dis.get(i).setName(temp[1]);
                    }
                }
            }
            try {
                dis.get(i).sortDis();
                dis.get(i).sortByRules();
            }catch (Exception e){
                System.out.println(e);
                System.out.println(dis.get(i).Sector);
            }
        }
        HashMap<String,Integer> countbySec = new HashMap<>();
        HashMap<String,Integer> countbyLoc = new HashMap<>();
        countbySec = CountBySector(dis);
        countbyLoc = CountByLocation(dis);
        StringBuffer jsonBySec = new StringBuffer();
        StringBuffer jsonByLoc = new StringBuffer();
        HashMap<String,CateWithoutLoc> cateMapBySeC = new HashMap<>();
        HashMap<String,CateWithLoc> cateMapByLoc = new HashMap<>();
        for (String key:countbySec.keySet()
             ) {
            cateMapBySeC.put(key,new CateWithoutLoc(key));
        }
        CountWordsBySector(countbySec,dis,cateMapBySeC);

        for (String key:countbyLoc.keySet()
                ) {
            cateMapByLoc.put(key,new CateWithLoc(key));
        }
        CountWordsByLocation(countbyLoc,dis,cateMapByLoc);
//        System.out.println(cateMapBySeC.get("民事@邻里纠纷").getTop10Words().get(1).length());

        WriteJson.writeWithSec(countbySec,cateMapBySeC);
        WriteJson.writeWithLoc(countbyLoc,cateMapByLoc);
        CountByDate countByDate = new CountByDate();
        Map countbydate = countByDate.CountWithoudLoc(dis);
        WriteJson.writeDateCSV(countbydate);



         System.out.println("end");
//        for (String key:map.keySet()
//             ) {
//            System.out.println(key+":"+map.get(key));
//        }
//        System.out.println(map.size());


    }
}


