package primeirosPassos.idfes;

public class leituraInicial {
    public static void main(String[] args) {
        String nome1 = "Wadson";
        String sobrenome = "Pinheiro";

        String nomeCompleto = nomeCompleto(nome1, sobrenome);
        System.out.println(nomeCompleto);
    }

    public static String nomeCompleto(String nome1, String sobrenome) {
        return (nome1).concat(" ").concat(sobrenome);
    }
}
