import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
				<Image
					className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
					src="/next.svg"
					alt="Next.js Logo"
					width={180}
					height={37}
					priority
				/>
			</div>

			<div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
				<Link
					passHref
					href={"/outra-url"}
					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
				>
					<h2 className="mb-3 text-2xl font-semibold">
						Ir para outra pagina{" "}
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
							-&gt;
						</span>
					</h2>
				</Link>
			</div>
			<p>
				TypeScript é uma linguagem de programação desenvolvida pela Microsoft que adiciona
				tipagem estática ao JavaScript, permitindo que os desenvolvedores identifiquem erros
				e bugs durante o processo de desenvolvimento, em vez de em tempo de execução. Essa
				característica faz com que o TypeScript seja especialmente valioso em projetos de
				grande escala, onde o código é complexo e mantido por equipes grandes. O sistema de
				tipos do TypeScript é muito flexível, suportando tipos básicos, como string, number
				e boolean, assim como tipos mais avançados, como union, intersection e tipos
				genéricos, que permitem criar funções e componentes altamente reutilizáveis. Além
				disso, TypeScript traz suporte a recursos modernos do JavaScript, como classes,
				decoradores e async/await, garantindo compatibilidade com todos os navegadores, já
				que o código TypeScript é transpilado para JavaScript puro. Um dos grandes
				benefícios de se utilizar TypeScript é a facilidade de manutenção do código, pois a
				tipagem ajuda a documentação implícita, permitindo que desenvolvedores entendam
				melhor o propósito e a estrutura do código sem a necessidade de comentários
				extensivos. Ferramentas como o Visual Studio Code e o WebStorm oferecem suporte
				completo ao TypeScript, com autocompletação de código, refatoração segura e
				navegação mais eficiente entre os arquivos do projeto. Apesar de adicionar uma
				camada extra de complexidade, a curva de aprendizado do TypeScript é relativamente
				suave para quem já está familiarizado com JavaScript, e a linguagem tem ganhado uma
				adoção cada vez maior na comunidade de desenvolvimento web devido aos seus
				benefícios comprovados de produtividade, segurança e escalabilidade de aplicações.
				Portanto, TypeScript não apenas melhora a qualidade do código, mas também
				proporciona uma experiência de desenvolvimento mais robusta, previsível e agradável
				para desenvolvedores de todos os níveis de experiência.
			</p>
		</main>
	);
}
