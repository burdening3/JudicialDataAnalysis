package classification;
import net.sf.json.JSON;
import net.sf.json.JSONSerializer;
import java.util.Date;

public class test {

    public static class Book {

        int id;
        int price;
        String name;
        String author;
        Date publishDate;

        public int getId() {
            return id;
        }
        public void setId(int id) {
            this.id = id;
        }
        public int getPrice() {
            return price;
        }
        public void setPrice(int price) {
            this.price = price;
        }
        public String getAuthor() {
            return author;
        }
        public void setAuthor(String author) {
            this.author = author;
        }
        public Date getPublishDate() {
            return publishDate;
        }
        public void setPublishDate(Date publishDate) {
            this.publishDate = publishDate;
        }
        public String getName() {
            return name;
        }
        public void setName(String name) {
            this.name = name;
        }
        @Override
        public String toString() {
            // TODO Auto-generated method stub
            return "name:"+this.name+",author:"+this.author+",id:"+this.id+",price:"+this.price+",publishDate:"+this.publishDate.toLocaleString();
        }

    }

    public static void main(String[] args) {
        // TODO Auto-generated method stub
        Book book = new Book();
        book.setId(1);
        book.setName("java编程要领");
        book.setPrice(12);
        book.setAuthor("tomas");
        book.setPublishDate(new Date());

        System.out.println("JSONSerializer.toJSON()方法");
        JSON json = JSONSerializer.toJSON(book);
        System.out.println(json);

//        String jsonStr = "{author=\"tomas\",id:1,price:12,publishDate:\"\"}";

//        System.out.println("JSONSerializer.toJava()方法");
//        Object tempObj =  JSONSerializer.toJava(json);
//        System.out.println(Object.class.cast(book).toString());
        FileWrite.writeFile("D:\\result1111.json",json.toString());
    }
}
