/* =========================================================================
   DLC-1 · BASE DE CONTEÚDO DO SITE
   -------------------------------------------------------------------------
   Este é o ÚNICO arquivo que precisa ser editado no dia a dia.
   Para publicar uma notícia, adicione um objeto no início de DLC1.noticias.
   Para incluir um clube, acrescente uma linha em DLC1.clubes.
   Para registrar um governador, acrescente uma linha em DLC1.governadores.
   ========================================================================= */

const DLC1 = {

  /* ---------------------------------------------------------------------
     1. IDENTIDADE E CONTATO
     --------------------------------------------------------------------- */
  instituicao: {
    nome: 'Distrito LC-1 de Lions Clubes Internacional',
    sigla: 'DLC-1',
    lema: 'Nós Servimos',
    lemaDistrital: 'Servir com Equidade',
    lemaInternacional: 'Enraizados no Servir',
    anoLeonistico: '2026 / 2027',
    endereco: 'Rua México 11 / 1802, Rio de Janeiro, RJ, CEP 20031-144, Brasil',
    telefone: '+55 (21) 2262-2198',
    whatsapp: '+55 (21) 96720-5400',
    whatsappUrl: 'https://wa.me/+552196720-5400',
    email: 'faf.lions71@gmail.com',
    facebook: 'https://www.facebook.com/search/top?q=distrito%20lc-1',
    instagram: 'https://www.instagram.com/distritolc1',
    expediente: 'Site do DLC-1 de Lions Internacional | Operação sob concessão de direitos outorgada à FAF, Fundação Armando Fajardo de Lions Clubes. Gestão executiva sob contrato para Fator Brasil Ltda com os serviços de #oMINIMÍDIA Hub de Comunicação. Todos os direitos reservados © 2026.'
  },

  /* ---------------------------------------------------------------------
     2. MENU PRINCIPAL
     --------------------------------------------------------------------- */
  menu: [
    { id: 'noticias',   rotulo: 'Notícias',   url: 'index.html',      descricao: 'A corrente do bem' },
    { id: 'distrito',   rotulo: 'Distrito',   url: 'distrito.html',   descricao: 'Quem somos' },
    { id: 'dirigentes', rotulo: 'Dirigentes', url: 'dirigentes.html', descricao: 'Governadoria e história' },
    { id: 'faf',        rotulo: 'FAF',        url: 'faf.html',        descricao: 'Fundação Armando Fajardo' },
    { id: 'clubes',     rotulo: 'Clubes',     url: 'clubes.html',     descricao: 'Lions, Leo e Castores' },
    { id: 'causas',     rotulo: 'Causas',     url: 'causas.html',     descricao: 'Oito causas globais' },
    { id: 'lideranca',  rotulo: 'Liderança',  url: 'lideranca.html',  descricao: 'Cursos de formação' },
    { id: 'subsidios',  rotulo: 'Subsídios',  url: 'subsidios.html',  descricao: 'Recursos da LCIF' },
    { id: 'alac',       rotulo: 'ALAC',       url: 'alac.html',       descricao: 'Letras, Artes e Ciências' },
    { id: 'doe',        rotulo: 'Doe',        url: 'doe.html',        descricao: 'Doe com segurança' },
    { id: 'editorial',  rotulo: 'Editorial',  url: 'editorial.html',  descricao: 'Linha editorial do portal' }
  ],

  /* ---------------------------------------------------------------------
     3. NOTÍCIAS (a mais recente vem sempre em primeiro lugar)
     categoria: Liderança | Distrito | Saúde | Inclusão | Cultura | Internacional
     --------------------------------------------------------------------- */
  noticias: [
    {
      id: 'curso-lideranca',
      destaque: true,
      categoria: 'Liderança',
      titulo: 'Formação de Líderes: inscrições abertas para o curso gratuito',
      resumo: 'Para servir melhor, inspirar pessoas e multiplicar o impacto dos valores do Lions Clube no mundo. Um serviço do DLC-1 para todos os países de língua portuguesa. Estão abertas até 30/09/26 as inscrições para o Curso Online de Desenvolvimento de Jovens Lideranças, gratuito.',
      imagem: 'assets/img/noticias/banner-idl-2026.jpg',
      url: 'lideranca.html',
      rotuloLink: 'Conhecer o curso'
    },
    {
      id: 'governadora',
      categoria: 'Distrito',
      titulo: 'DG CaL Silvia Regina Nunes e CL Adilson: Servir com Equidade',
      resumo: 'A mensagem da Governadora do Ano Leonístico 2026/2027 e a apresentação do pin oficial que reúne, de forma simbólica, os valores centrais do Lions Clubs International.',
      imagem: 'assets/img/noticias/gd-silvia-regina.png',
      url: 'governadora.html',
      rotuloLink: 'Ler a mensagem'
    },
    {
      id: 'presidente-internacional',
      categoria: 'Internacional',
      titulo: 'IP CL Mark S. Lyon and CaL Lyn: Rooted in Service',
      resumo: 'O Presidente Internacional nos inspira com o lema "Enraizados no Servir", convidando-nos a criar raízes fortes por onde passarmos, fortalecendo o espírito de serviço, a amizade e o compromisso com nossas comunidades.',
      imagem: 'assets/img/noticias/ip-mark-lyon.png',
      url: 'https://www.lionsclubs.org/en/discover-our-clubs/our-leaders',
      rotuloLink: 'Lions Clubs International'
    },
    {
      id: 'van-faf',
      categoria: 'Distrito',
      titulo: 'A Van da FAF está disponível para todos os Lions Clubes do DLC-1',
      resumo: 'A unidade móvel atende à realização de diversos tipos de campanhas sociais, basta solicitá-la ao CL José Ronaldo Fernandes Brito.',
      imagem: 'assets/img/noticias/van-faf.jpg',
      url: 'faf.html',
      rotuloLink: 'Conhecer a FAF'
    },
    {
      id: 'colepe',
      categoria: 'Saúde',
      titulo: '255ª Ação Social da COLEPE',
      resumo: 'Todo último domingo do mês em Copacabana, com campanhas de saúde (diabetes, hipertensão arterial, obesidade, abuso do álcool e câncer de pele, entre outros) sob a liderança do CL Sergio Canedo e sua equipe, do LC RJ Princesa do Leme.',
      imagem: 'assets/img/noticias/colepe-2026.png'
    },
    {
      id: 'sao-cristovao',
      categoria: 'Saúde',
      titulo: 'Ação Social em São Cristóvão',
      resumo: 'Campanha de prevenção do diabetes, da hipertensão arterial e da obesidade, em todos os últimos sábados do mês, com a liderança do CL José Ronaldo Fernandes e sua equipe, do LC RJ São Cristóvão.',
      imagem: 'assets/img/noticias/sao-cristovao-2026.png'
    },
    {
      id: 'ver-melhor',
      categoria: 'Saúde',
      titulo: '6ª Ação Social: Ver Melhor',
      resumo: 'Campanhas de exames de acuidade visual e doação de óculos, com a liderança do CL Eduardo Barbiere e sua equipe, do LC RJ Flamengo.',
      imagem: 'assets/img/noticias/ver-melhor-flamengo.png',
      url: 'clube-flamengo.html',
      rotuloLink: 'Página do LC RJ Flamengo'
    },
    {
      id: 'ama-xerem',
      categoria: 'Inclusão',
      titulo: 'Centro de Convivência para Pessoas com Deficiência',
      resumo: 'Inclusão, cidadania e solidariedade do LC RJ Duque de Caxias Ama Xerém, que recebeu apoio de subsídios da LCIF para atendimento social.',
      imagem: 'assets/img/noticias/ama-xerem.gif',
      url: 'clube-ama-xerem.html',
      rotuloLink: 'Conhecer o projeto'
    },
    {
      id: 'terreirao',
      categoria: 'Saúde',
      titulo: 'Ação Social do Terreirão',
      resumo: '10 Lions Clubes unidos oferecem serviços essenciais de saúde, cidadania e bem-estar, refletindo o compromisso leonístico de servir e transformar vidas.',
      imagem: 'assets/img/noticias/terreirao-2026.gif',
      url: 'clube-recreio.html',
      rotuloLink: 'Ver a ação completa'
    },
    {
      id: 'quitandinha',
      categoria: 'Saúde',
      titulo: 'Campanha do Diabetes e Prevenção do Câncer de Mama',
      resumo: 'Realizada pelo LC Petrópolis Quitandinha com apoio da equipe da Fundação Armando Fajardo.',
      imagem: 'assets/img/noticias/quitandinha-diabetes.png',
      url: 'clube-quitandinha.html',
      rotuloLink: 'Página do clube'
    },
    {
      id: 'leoes-poeticos',
      categoria: 'Cultura',
      titulo: 'Leões poéticos despertam a sensibilidade para servir',
      resumo: 'Inscrições abertas para a participação dos associados dos Lions Clubes de todo o Brasil, com a CaL Sandra Simões do LC RJ Cachambi e a CaL Fátima Soares do LC RJ Princesa do Leme.',
      imagem: 'assets/img/noticias/leoes-poeticos-2026.png'
    },
    {
      id: 'cultura-paz',
      categoria: 'Cultura',
      titulo: 'Fórum "Lions e a Cultura de Paz"',
      resumo: 'A Academia Brasileira de Cultura Leonística realizará, no dia 21 de setembro de 2026, às 20 horas (horário de Brasília), transmissão pelo YouTube comemorativa ao Dia Internacional da Cultura de Paz, definido pela Organização das Nações Unidas (ONU).',
      imagem: 'assets/img/noticias/forum-cultura-paz.png',
      url: 'https://www.agdl.org.br/lionsculturapazforum/',
      rotuloLink: 'Acessar o fórum'
    }
  ],

  /* ---------------------------------------------------------------------
     4. CAUSAS GLOBAIS DO LIONS INTERNACIONAL
     --------------------------------------------------------------------- */
  causas: [
    {
      nome: 'Visão',
      icone: 'olho',
      texto: 'O combate à cegueira evitável é uma das missões mais antigas e reconhecidas da organização. Os Leões realizam triagens visuais, doam óculos, oferecem cirurgias de catarata e apoiam centros oftalmológicos para garantir que o mundo possa ver com clareza.'
    },
    {
      nome: 'Diabetes',
      icone: 'gota',
      texto: 'Com a missão de reduzir a prevalência da doença e melhorar a qualidade de vida dos diagnosticados, os clubes promovem a educação em saúde, o rastreamento preventivo em massa e ações de incentivo a um estilo de vida saudável.'
    },
    {
      nome: 'Fome',
      icone: 'prato',
      texto: 'Diante da insegurança alimentar global, a meta é garantir que todas as pessoas tenham acesso a alimentos nutritivos. Isso inclui o suporte estrutural a bancos de alimentos locais, doação de refeições prontas e o desenvolvimento de sistemas comunitários de alimentação.'
    },
    {
      nome: 'Meio Ambiente',
      icone: 'folha',
      texto: 'Reconhecendo que um planeta saudável é essencial para a qualidade de vida, as ações envolvem o plantio de árvores, a limpeza de rios e espaços públicos, além de campanhas de conscientização ecológica para proteger e restaurar ecossistemas.'
    },
    {
      nome: 'Câncer Infantil',
      icone: 'coracao',
      texto: 'O foco é oferecer suporte vital, financeiro e psicológico para crianças diagnosticadas com câncer e suas famílias. O Lions ajuda a garantir infraestrutura hospitalar, espaços lúdicos, hospedagem durante tratamentos e conforto contínuo nesses momentos difíceis.'
    },
    {
      nome: 'Juventude',
      icone: 'estrela',
      texto: 'A organização investe ativamente nos líderes de amanhã, capacitando jovens por meio dos Leo Clubes, bolsas de estudo, programas de mentoria e do renomado Concurso Cartaz da Paz, promovendo empoderamento e desenvolvimento pessoal.'
    },
    {
      nome: 'Socorro após Catástrofes',
      icone: 'escudo',
      texto: 'Quando ocorrem desastres naturais, os Leões frequentemente são os primeiros a agir nas suas comunidades. Através da Fundação de Lions Clubs International (LCIF), fornecem itens básicos de sobrevivência (água, alimentos e abrigo) no curto prazo e apoiam a reconstrução de infraestruturas locais no longo prazo.'
    },
    {
      nome: 'Esforços Humanitários',
      icone: 'maos',
      texto: 'Este pilar engloba projetos diversos voltados para populações em situação de extrema vulnerabilidade, abordando necessidades emergentes na saúde, educação e desenvolvimento comunitário para promover equidade e acesso a recursos básicos.'
    }
  ],

  /* ---------------------------------------------------------------------
     5. GOVERNADORES DO DLC-1 (do mais recente ao mais antigo)
     --------------------------------------------------------------------- */
  governadores: [
    { periodo: '2026/2027', nome: 'GD CaL Silvia Regina Dias Nunes', pagina: 'governadora.html' },
    { periodo: '2025/2026', nome: 'GD CL José Paulo Thomé' },
    { periodo: '2024/2025', nome: 'GD CL Renato Benevenuto' },
    { periodo: '2023/2024', nome: 'GD CaL Maria Luiza Gomes' },
    { periodo: '2022/2023', nome: 'GD CaL Pulucena Malta Silva' },
    { periodo: '2021/2022', nome: 'GD CaL Vera Motta' },
    { periodo: '2020/2021', nome: 'GD CL Carlos Eduardo M. Ramos Schaefer' },
    { periodo: '2019/2020', nome: 'GD CaL Carmen Vera Coelho de Cnop' },
    { periodo: '2018/2019', nome: 'GD CaL Marlene de Mattos Gonçalves' },
    { periodo: '2017/2018', nome: 'GD CL Benedito C. de Oliveira' },
    { periodo: '2016/2017', nome: 'GD CaL Marília Simões F. da Silva' },
    { periodo: '2015/2016', nome: 'GD CL Mauricio Eloy R. Malta Silva' },
    { periodo: '2014/2015', nome: 'GD CaL Francisca Rodrigues Talarico' },
    { periodo: '2013/2014', nome: 'GD CL Fernando da Silva Mota' },
    { periodo: '2012/2013', nome: 'GD CL Selma Aragão' },
    { periodo: '2011/2012', nome: 'GD CL Achilles Machado Filho' },
    { periodo: '2010/2011', nome: 'GD CL Almir Fonseca Baptista' },
    { periodo: '2009/2010', nome: 'GD CL Olavo Divino Vieira' },
    { periodo: '2008/2009', nome: 'GD CL Gerson Villela Souto' },
    { periodo: '2007/2008', nome: 'GD CL José Luiz Alves Vilela' },
    { periodo: '2006/2007', nome: 'GD CL Roberto Régis Bittencourt' },
    { periodo: '2005/2006', nome: 'GD CL Almir de Castro Campello' },
    { periodo: '2004/2005', nome: 'GD CL Pedro Aurélio de Mattos Gonçalves' },
    { periodo: '2003/2004', nome: 'GD CL Jorge Coelho de Sá' },
    { periodo: '2002/2003', nome: 'GD CaL P. Suely R. Malta Silva' },
    { periodo: '2001/2002', nome: 'GD CaL Marise O. M. de Athayde' },
    { periodo: '2000/2001', nome: 'GD CL Luiz Gonzaga Forster' },
    { periodo: '1999/2000', nome: 'GD CL Roberto Romito Rodrigues de Barros' },
    { periodo: '1998/1999', nome: 'GD CL João Roberto Moreira Alves' },
    { periodo: '1997/1998', nome: 'GD CL Eduardo Henrique de Lemos Andréa' },
    { periodo: '1996/1997', nome: 'GD CL Dorivaldo José Pinheiro Barros' },
    { periodo: '1995/1996', nome: 'GD CaL Teresa Costa e Silva' },
    { periodo: '1994/1995', nome: 'GD CL Armênio Santiago Cardoso' },
    { periodo: '1993/1994', nome: 'GD CL Mauro Lúcio Guedes Werneck' },
    { periodo: '1992/1993', nome: 'GD CL Cid Homero Ferreira dos Santos' },
    { periodo: '1991/1992', nome: 'GD CL Milton Segala Pauletto' },
    { periodo: '1990/1991', nome: 'GD CL Mauricio Smith Faria' },
    { periodo: '1989/1990', nome: 'GD CL Gibraltar P. de Oliveira Vidal' },
    { periodo: '1988/1989', nome: 'GD CL Júlio M. Pina Rodrigues' },
    { periodo: '1987/1988', nome: 'GD CL David Ferreira Gaia' },
    { periodo: '1986/1987', nome: 'GD CL Nilo Gomes de Mattos' },
    { periodo: '1985/1986', nome: 'GD CL Luiz Soares de Alencar' },
    { periodo: '1984/1985', nome: 'GD CL Jorge Narciso Rosas' },
    { periodo: '1983/1984', nome: 'GD CL Odovaldo Vasques' },
    { periodo: '1982/1983', nome: 'GD CL Dark Nunes Pires' },
    { periodo: '1981/1982', nome: 'GD CL Gerbert Nogueira Bastos' },
    { periodo: '1980/1981', nome: 'GD CL Eloy Manuel S. da Silva' },
    { periodo: '1979/1980', nome: 'GD CL Nelson de Carvalho Mesquita' },
    { periodo: '1978/1979', nome: 'GD CL Manuel Schwartz' },
    { periodo: '1977/1978', nome: 'GD CL Appolônio Lopes Pinto' },
    { periodo: '1976/1977', nome: 'GD CL Archimedes Barbosa Jacques' },
    { periodo: '1975/1976', nome: 'GD CL Elias Antonio Yunes Júnior' },
    { periodo: '1974/1975', nome: 'GD CL Henrique C. Miguel' },
    { periodo: '1973/1974', nome: 'GD CL Mario G. Alves Vilela' },
    { periodo: '1972/1973', nome: 'GD CL Alberto Guerchon' },
    { periodo: '1971/1972', nome: 'GD CL Alexandre Campos da Costa e Silva' },
    { periodo: '1970/1971', nome: 'GD CL Antonio P. Capanema de Souza' },
    { periodo: '1969/1970', nome: 'GD CL Aquilino Barreiros' },
    { periodo: '1968/1969', nome: 'GD CL Talvani Sanfin Cardoso' },
    { periodo: '1967/1968', nome: 'GD CL Mario César R. Pereira' },
    { periodo: '1966/1967', nome: 'GD CL Milton Flacks' },
    { periodo: '1965/1966', nome: 'GD CL Licinio M. Garcia Pinto' },
    { periodo: '1964/1965', nome: 'GD CL Antonio Salem' },
    { periodo: '1963/1964', nome: 'GD CL Altivo Teixeira da Silva' },
    { periodo: '1962/1963', nome: 'GD CL Luiz Gabeira' },
    { periodo: '1961/1962', nome: 'GD CL Max Henry Reyesrbach' },
    { periodo: '1960/1961', nome: 'GD CL Pedro A. Mibieli de Carvalho' },
    { periodo: '1959/1960', nome: 'GD CL Antonio A. de Lima Neto' },
    { periodo: '1958/1959', nome: 'GD CL Carlos Schaefer' },
    { periodo: '1957/1958', nome: 'GD CL Nestor de Oliveira' },
    { periodo: '1956/1957', nome: 'GD CL Cid Navajas (dez/jun)' },
    { periodo: '1956/1957', nome: 'GD CL Marius Smith (jul/nov)' },
    { periodo: '1955/1956', nome: 'GD CL Noel Lobo Guimarães' },
    { periodo: '1954/1955', nome: 'GD CL Paulo Pereira Ignácio' },
    { periodo: '1953/1954', nome: 'GD CL Armando Fajardo', nota: 'Fundador', link: 'https://www.flumignano.com/lionscluberiodejaneiro/ARMANDO_FAJARDO_LIFE.htm' },
    { periodo: '1952/1953', nome: 'GD CL Armando Fajardo', nota: 'Fundador', link: 'https://www.flumignano.com/lionscluberiodejaneiro/ARMANDO_FAJARDO_LIFE.htm' }
  ],

  /* ---------------------------------------------------------------------
     6. CLUBES (tipo: lions | leo | castor)
     --------------------------------------------------------------------- */
  clubes: [
    /* --- LIONS CLUBES --- */
    { nome: 'LC Angra dos Reis', tipo: 'lions' },
    { nome: 'LC Barra do Piraí', tipo: 'lions' },
    { nome: 'LC Barra Mansa', tipo: 'lions' },
    { nome: 'LC Barra Mansa Ano Bom', tipo: 'lions' },
    { nome: 'LC Duque de Caxias', tipo: 'lions' },
    { nome: 'LC Duque de Caxias Ama Xerém', tipo: 'lions', pagina: 'clube-ama-xerem.html' },
    { nome: 'LC Duque de Caxias Jardim Primavera', tipo: 'lions' },
    { nome: 'LC Engenheiro Paulo de Frontin', tipo: 'lions' },
    { nome: 'LC Itaguaí', tipo: 'lions' },
    { nome: 'LC Itatiaia', tipo: 'lions' },
    { nome: 'LC Mangaratiba-Muriqui', tipo: 'lions' },
    { nome: 'LC Mendes', tipo: 'lions' },
    { nome: 'LC Mesquita', tipo: 'lions' },
    { nome: 'LC Miguel Pereira', tipo: 'lions' },
    { nome: 'LC Nilópolis', tipo: 'lions' },
    { nome: 'LC Nilópolis Olinda', tipo: 'lions' },
    { nome: 'LC Nova Iguaçu', tipo: 'lions' },
    { nome: 'LC Nova Iguaçu Belfort Roxo', tipo: 'lions' },
    { nome: 'LC Nova Iguaçu Miguel Couto', tipo: 'lions' },
    { nome: 'LC Paracambí', tipo: 'lions' },
    { nome: 'LC Paraíba do Sul', tipo: 'lions' },
    { nome: 'LC Parati', tipo: 'lions' },
    { nome: 'LC Petrópolis Centro', tipo: 'lions' },
    { nome: 'LC Petrópolis Itaipava', tipo: 'lions' },
    { nome: 'LC Petrópolis Nogueira Correas', tipo: 'lions' },
    { nome: 'LC Petrópolis Quitandinha', tipo: 'lions', pagina: 'clube-quitandinha.html' },
    { nome: 'LC Petrópolis Vale dos Ipês', tipo: 'lions' },
    { nome: 'LC Piraí', tipo: 'lions' },
    { nome: 'LC Quatis', tipo: 'lions' },
    { nome: 'LC Resende', tipo: 'lions' },
    { nome: 'LC RJ Aeroporto', tipo: 'lions' },
    { nome: 'LC RJ Alvorada', tipo: 'lions' },
    { nome: 'LC RJ Alto da Boa Vista', tipo: 'lions' },
    { nome: 'LC RJ Arnaldo Guinle', tipo: 'lions' },
    { nome: 'LC RJ Arpoador', tipo: 'lions' },
    { nome: 'LC RJ Bangu', tipo: 'lions' },
    { nome: 'LC RJ Barra da Tijuca', tipo: 'lions' },
    { nome: 'LC RJ Bonsucesso', tipo: 'lions' },
    { nome: 'LC RJ Botafogo', tipo: 'lions' },
    { nome: 'LC RJ Cachambi', tipo: 'lions' },
    { nome: 'LC RJ Campo Grande', tipo: 'lions' },
    { nome: 'LC RJ Carioca', tipo: 'lions' },
    { nome: 'LC RJ Catete', tipo: 'lions' },
    { nome: 'LC RJ Ciber da União', tipo: 'lions' },
    { nome: 'LC RJ Ciber Força do Servir', tipo: 'lions' },
    { nome: 'LC RJ Ciber Matheus Pra Sempre', tipo: 'lions' },
    { nome: 'LC RJ Ciber Motivação CL Eloy Silva', tipo: 'lions' },
    { nome: 'LC RJ Ciber Responsabilidade Social', tipo: 'lions' },
    { nome: 'LC RJ Cidade Maravilhosa', tipo: 'lions' },
    { nome: 'LC RJ Colorindo a Vida', tipo: 'lions' },
    { nome: 'LC RJ Copacabana', tipo: 'lions' },
    { nome: 'LC RJ Corrente pelo Bem', tipo: 'lions' },
    { nome: 'LC RJ Cristo Redentor', tipo: 'lions' },
    { nome: 'LC RJ do Rio de Janeiro Mater Clube', tipo: 'lions' },
    { nome: 'LC RJ Embaixadores da Alegria', tipo: 'lions' },
    { nome: 'LC RJ Engenho Velho', tipo: 'lions' },
    { nome: 'LC RJ Estácio', tipo: 'lions' },
    { nome: 'LC RJ Flamengo', tipo: 'lions', pagina: 'clube-flamengo.html' },
    { nome: 'LC RJ Floresta da Tijuca', tipo: 'lions' },
    { nome: 'LC RJ Fluminense', tipo: 'lions' },
    { nome: 'LC RJ Gávea', tipo: 'lions' },
    { nome: 'LC RJ Glória', tipo: 'lions' },
    { nome: 'LC RJ Golfe Olímpico', tipo: 'lions' },
    { nome: 'LC RJ Grajaú', tipo: 'lions' },
    { nome: 'LC RJ Guaratiba', tipo: 'lions' },
    { nome: 'LC RJ Humaitá', tipo: 'lions' },
    { nome: 'LC RJ Ipanema', tipo: 'lions' },
    { nome: 'LC RJ Jacaré', tipo: 'lions' },
    { nome: 'LC RJ Jacarepaguá', tipo: 'lions' },
    { nome: 'LC RJ Jacarepaguá Freguesia', tipo: 'lions' },
    { nome: 'LC RJ Jardim Botânico', tipo: 'lions' },
    { nome: 'LC RJ Jardim de Alá', tipo: 'lions' },
    { nome: 'LC RJ Jovens Líderes', tipo: 'lions' },
    { nome: 'LC RJ Lagoa', tipo: 'lions' },
    { nome: 'LC RJ Lagoa Rodrigo de Freitas', tipo: 'lions' },
    { nome: 'LC RJ Laranjeiras', tipo: 'lions' },
    { nome: 'LC RJ Leblon', tipo: 'lions' },
    { nome: 'LC RJ Leme', tipo: 'lions' },
    { nome: 'LC RJ Lins de Vasconcelos', tipo: 'lions' },
    { nome: 'LC RJ Madureira', tipo: 'lions' },
    { nome: 'LC RJ Maracanã', tipo: 'lions' },
    { nome: 'LC RJ Méier', tipo: 'lions' },
    { nome: 'LC RJ Paciência', tipo: 'lions' },
    { nome: 'LC RJ Peixoto', tipo: 'lions' },
    { nome: 'LC RJ Penha', tipo: 'lions' },
    { nome: 'LC RJ Pilares', tipo: 'lions' },
    { nome: 'LC RJ Praça da Bandeira', tipo: 'lions' },
    { nome: 'LC RJ Princesa do Leme', tipo: 'lions' },
    { nome: 'LC RJ Realengo', tipo: 'lions' },
    { nome: 'LC RJ Recreio dos Bandeirantes', tipo: 'lions', pagina: 'clube-recreio.html' },
    { nome: 'LC RJ Rio Comprido', tipo: 'lions' },
    { nome: 'LC RJ Rio Maravilha', tipo: 'lions' },
    { nome: 'LC RJ Rodoviária', tipo: 'lions' },
    { nome: 'LC RJ Rocha Miranda', tipo: 'lions' },
    { nome: 'LC RJ Santa Cruz', tipo: 'lions' },
    { nome: 'LC RJ Santa Cruz Nilton Costa', tipo: 'lions' },
    { nome: 'LC RJ Santa Teresa', tipo: 'lions' },
    { nome: 'LC RJ Sernambetiba', tipo: 'lions' },
    { nome: 'LC RJ Sepetiba', tipo: 'lions' },
    { nome: 'LC RJ São Cristóvão', tipo: 'lions' },
    { nome: 'LC RJ Taquara', tipo: 'lions' },
    { nome: 'LC RJ Univ. Castelo Branco', tipo: 'lions' },
    { nome: 'LC RJ Urca', tipo: 'lions' },
    { nome: 'LC RJ Vargem Grande', tipo: 'lions' },
    { nome: 'LC RJ Vargens', tipo: 'lions' },
    { nome: 'LC RJ Vila Isabel', tipo: 'lions' },
    { nome: 'LC RJ Vila Valqueire', tipo: 'lions' },
    { nome: 'LC RJ Vozes da Pólio', tipo: 'lions' },
    { nome: 'LC São João de Meriti', tipo: 'lions' },
    { nome: 'LC São José do Vale do Rio Preto', tipo: 'lions' },
    { nome: 'LC São Lourenço', tipo: 'lions' },
    { nome: 'LC Seropédica Universitário', tipo: 'lions' },
    { nome: 'LC Teresópolis', tipo: 'lions' },
    { nome: 'LC Três Rios', tipo: 'lions' },
    { nome: 'LC Valença', tipo: 'lions' },
    { nome: 'LC Vassouras', tipo: 'lions' },
    { nome: 'LC Volta Redonda', tipo: 'lions' },
    { nome: 'LC Volta Redonda 17 de Julho', tipo: 'lions' },
    { nome: 'LC Volta Redonda 9 de Abril', tipo: 'lions' },
    { nome: 'LC Volta Redonda Cidade do Aço', tipo: 'lions' },
    { nome: 'LC Volta Redonda Santa Cecília', tipo: 'lions' },

    /* --- LEO CLUBES --- */
    { nome: 'Leo Clube do Rio de Janeiro Mater', tipo: 'leo' },
    { nome: 'Leo Clube Petrópolis Itaipava', tipo: 'leo' },
    { nome: 'Leo Clube RJ Barra da Tijuca', tipo: 'leo' },
    { nome: 'Leo Clube RJ Copacabana', tipo: 'leo' },
    { nome: 'Leo Clube RJ Flamengo', tipo: 'leo' },
    { nome: 'Leo Clube RJ Ipanema', tipo: 'leo' },
    { nome: 'Leo Clube RJ Leme', tipo: 'leo' },
    { nome: 'Leo Clube RJ Princesa do Leme', tipo: 'leo' },
    { nome: 'Leo Clube RJ Recreio dos Bandeirantes', tipo: 'leo' },
    { nome: 'Leo Clube RJ Sernambetiba', tipo: 'leo' },

    /* --- CLUBES DE CASTORES --- */
    { nome: 'Bangu', tipo: 'castor' },
    { nome: 'Barra do Piraí', tipo: 'castor' },
    { nome: 'Barra Mansa', tipo: 'castor' },
    { nome: 'Duque de Caxias Carlos Schaefer', tipo: 'castor' },
    { nome: 'Duque de Caxias Jardim Primavera', tipo: 'castor' },
    { nome: 'Flamengo', tipo: 'castor' },
    { nome: 'Gávea (Rio de Janeiro)', tipo: 'castor' },
    { nome: 'Grajaú (Rio de Janeiro)', tipo: 'castor' },
    { nome: 'Ilha do Governador (Rio de Janeiro)', tipo: 'castor' },
    { nome: 'Itatiaia', tipo: 'castor' },
    { nome: 'Mendes', tipo: 'castor' },
    { nome: 'Méier (Rio de Janeiro)', tipo: 'castor' },
    { nome: 'Mesquita (Nova Iguaçu)', tipo: 'castor' },
    { nome: 'Miguel Couto (Nova Iguaçu)', tipo: 'castor' },
    { nome: 'Nilópolis', tipo: 'castor' },
    { nome: 'Nova Iguaçu Centro', tipo: 'castor' },
    { nome: 'Nova Iguaçu Vila de Cava', tipo: 'castor' },
    { nome: 'Paraíba do Sul', tipo: 'castor' },
    { nome: 'Paraíba do Sul Centro', tipo: 'castor' },
    { nome: 'Petrópolis Itaipava', tipo: 'castor' },
    { nome: 'Petrópolis Marcos Senna', tipo: 'castor' },
    { nome: 'Rio de Janeiro Campo Grande', tipo: 'castor' },
    { nome: 'Rio de Janeiro Grajaú', tipo: 'castor' },
    { nome: 'Rio de Janeiro Ilha do Governador', tipo: 'castor' },
    { nome: 'Rio de Janeiro Méier', tipo: 'castor' },
    { nome: 'Rio de Janeiro Santa Cruz Eloy Silva', tipo: 'castor' },
    { nome: 'Rio de Janeiro São Cristóvão', tipo: 'castor' },
    { nome: 'São João de Meriti', tipo: 'castor' },
    { nome: 'Teresópolis', tipo: 'castor' }
  ],

  /* ---------------------------------------------------------------------
     7. APOIADORES E PARCEIROS
     --------------------------------------------------------------------- */
  apoiadores: [
    { nome: 'Revista Fator Brasil', imagem: 'assets/img/anuncios/fator-brasil.png', url: 'https://www.revistafatorbrasil.com.br/' },
    { nome: 'Flumignano Instituto de Medicina', imagem: 'assets/img/anuncios/instituto-flumignano.png', url: 'https://www.medicina.flumignano.com/', fundo: '#14305c' },
    { nome: 'ESIL Imobiliária', imagem: 'assets/img/anuncios/ecil.png', url: 'https://www.esil.com.br/' },
    { nome: 'EDEL', imagem: 'assets/img/anuncios/edel.jpg', url: 'https://edel.com.br/' }
  ],

  /* ---------------------------------------------------------------------
     8. LINKS INSTITUCIONAIS
     --------------------------------------------------------------------- */
  linksInstitucionais: [
    { rotulo: 'Lions Internacional', url: 'https://www.lionsclubs.org/' },
    { rotulo: 'Distrito Múltiplo LC', url: 'http://www.lions.org.br/multiplolc/' },
    { rotulo: 'Fundação Armando Fajardo', url: 'faf.html' },
    { rotulo: 'Lions Brasil', url: 'http://www.lions.org.br/' },
    { rotulo: 'Lions Liderança', url: 'https://lionslideranca.org.br/portal/' }
  ]
};
