package classification;

import java.io.*;

public class FileWrite {
    /**
     * 写文件
     * @param fileName
     * @param content
     */
    public static void writeFile(String fileName, String content){
        FileWriter output = null;
        BufferedWriter writer = null;
        try{
            output = new FileWriter(fileName);
            writer = new BufferedWriter(output);
            writer.write(content);
        }catch(Exception e){
            e.printStackTrace();
        }finally{
            if(null != writer){
                try {
                    writer.close();
                } catch (IOException e) {
                    // TODO Auto-generated catch block
                    e.printStackTrace();
                }
            }
            if(null != output){
                try {
                    output.close();
                } catch (IOException e) {
                    // TODO Auto-generated catch block
                    e.printStackTrace();
                }
            }
        }
    }

    public static String txt2String(String filePath){
        StringBuilder result = new StringBuilder();
        File file = new File(filePath);
        try{
            BufferedReader br = new BufferedReader(new FileReader(file));//构造一个BufferedReader类来读取文件
            String s = null;
            while((s = br.readLine())!=null){//使用readLine方法，一次读一行
                result.append(System.lineSeparator()+s);
            }
            br.close();
        }catch(Exception e){
            e.printStackTrace();
        }
        return result.toString();
    }

    public static void main(String[] args){
        File file = new File("D:/2222.txt");
        //System.out.println(txt2String(file));
    }

}
