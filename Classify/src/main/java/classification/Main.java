package classification;


import java.util.*;

public class Main {
    public static void main(String[] args) {
        SampleKeyWords a1 = new SampleKeyWords();

        List<String> stringList;
        List<Object> dataList = new ArrayList<Object>();
        int line = 0;
        HashMap<String,String[]> map = new HashMap<String, String[]>();

        //读分类标准至map
        String keyMap = new String();
        keyMap = FileWrite.txt2String("keyMap.txt"); //分类标准
        for (String keyLine:keyMap.split("\r\n")
             ) {
            if(keyLine.length()==0 || keyLine.contains("//")) continue;
            System.out.println(keyLine);

            String[] keys = keyLine.split("\\|");
            map.put(keys[0],keys[1].split(","));


        }

        //读取分词后的txt文件至dataList
        String listString = FileWrite.txt2String("splits.txt");
        for (String listline:listString.split("\r\n")
             ) {
            if(listline.length()==0 || listline.contains("//")) continue;
            stringList=new ArrayList(Arrays.asList(listline.split("/{1,}")));
            dataList.add(stringList);
        }

        //分类
        String Category = new String();
        Category = a1.categorize(dataList,map);
        FileWrite.writeFile("category.txt",Category);


        //滚雪球取关键词
        String keyoutput = new String();
        keyoutput = a1.Sample("KeyToSample.txt",dataList,true);//isMap true输出带频次的滚雪球结果 false输出不带频次
        FileWrite.writeFile("sort.txt",keyoutput);





    }
}

