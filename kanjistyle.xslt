<?xml version="1.0" encoding="UTF-8" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:kvg="http://kanjivg.tagaini.net">
  <xsl:output method="xml" version="1.0" encoding="UTF-8" indent="yes" omit-xml-declaration="yes"/>


  <xsl:template match="svg">
    <xsl:copy>
      <xsl:copy-of select="@*"/>
          <style type="text/css" >
          <![CDATA[
            text {
              stroke: #000000;
              fill: #000000;
            }
            path {
              stroke: #00bb00;
              stroke-width: 4pt;
              fill:   #ffffff;
            }
            #stroke-1 {
              stroke: #E8ECFB;
            }
            #stroke-2 {
              stroke: #D9CCE3;
            }
            #stroke-3 {
              stroke: #CAACCB;
            }
            #stroke-4 {
              stroke: #BA8DB4;
            }
            #stroke-5 {
              stroke: #AA6F9E;
            }
            #stroke-6 {
              stroke: #994F88;
            }
            #stroke-7 {
              stroke: #882E72;
            }
            #stroke-8 {
              stroke: #7BAFDE;
            }
            #stroke-9 {
              stroke: #6195CF;
            }
            #stroke-10 {
              stroke: #437DBF;
            }
            #stroke-11 {
              stroke: #1965B0;
            }
            #stroke-12 {
              stroke: #CAE0AB;
            }
            #stroke-13 {
              stroke: #4EB265;
            }
          ]]>
        </style>
        <xsl:apply-templates/>
    </xsl:copy>
  </xsl:template>

  <xsl:template match="path|text">
    <xsl:element name="{local-name()}">
      <xsl:for-each select="@*">
        <xsl:if test="substring-before(name(), ':') != 'kvg' and local-name() != 'style' and local-name() != 'id'">
          <xsl:attribute name="{local-name()}">
            <xsl:value-of select="."/>
          </xsl:attribute>
        </xsl:if>
        <xsl:attribute name="id">
          <xsl:value-of select="concat('stroke-', count(.|preceding::path))"/>
        </xsl:attribute>
      </xsl:for-each>
      <xsl:apply-templates/>
    </xsl:element>
  </xsl:template>
</xsl:stylesheet>
